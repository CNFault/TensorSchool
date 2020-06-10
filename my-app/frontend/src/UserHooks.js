import { useState, useEffect, useReducer } from 'react'

export function usePagination(model = '') {
	const [page, setPage] = useState(1)
	const [totalPage, setTotalPage] = useState(1)

	useEffect(
		() => {
			fetch(`/api/${model}/?_limit=0`)
				.then(answer =>
					setTotalPage(
						Math.ceil(answer.headers.get('x-total-count') / 3)
					)
				)
		},
		[]
	)

	return [
		{
			current: page,
			total: totalPage
		},
		setPage
	]
}

export function usePersons(page) {
	const [persons, setPersons] = useState([])

	useEffect(
		() => {
			fetch(`/api/person/?_page=${page}&_limit=3`)
				.then(answer => answer.json())
				.then(persons => setPersons(persons))
		},
		[page]
	)

	function updatePerson(updatedPerson) {
		setPersons(persons => {
			let updated = false

			const ps = persons.slice().map(person => {
				if (person.id !== updatedPerson.id) {
					return person
				}

				updated = true

				Object.assign(person, updatedPerson)
				return person
			})

			if (updated) {
				fetch(`/api/person/${updatedPerson.id}`, {
					method: 'PATCH',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(updatedPerson)
				})
			}

			return ps
		})
	}

	return [
		persons,
		updatePerson
	]
}

export function usePopup() {
	const [popupState, popupDispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'SHOW':
			case 'OPEN':
				return {
					show: true,
					editMode: false,
					person: action.person || state.person,
					children: action.children
				}

			case 'EDIT':
				return {
					show: true,
					editMode: true,
					person: action.person || state.person,
					children: action.children
				}

			case 'CLOSE':
			case 'HIDE':
			default:
				return {
					show: false,
					editMode: false,
					person: null,
					children: null
				}
		}
	}, {
		show: false,
		editMode: false,
		person: null,
		children: null
	})

	return [popupState, popupDispatch]
}