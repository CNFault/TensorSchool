import { useState, useEffect, useReducer } from 'react'

export function usePagination(model = '') { //пагинация по какой модели
	const [page, setPage] = useState(1) //две сущности, page и totalPage. И методы которые позволяют их задать
	const [totalPage, setTotalPage] = useState(1) // 1 - значение по умолчанию

	useEffect(
		() => {
			fetch(`/api/${model}/?_limit=0`) //запрашиваем нулевое количество элементов
				.then(answer =>
					setTotalPage( // устанавливает общее число страниц
						Math.ceil(answer.headers.get('x-total-count') / 3) // 'x-total-count' - заголовок ответа, сколько всего персон в БД
					)
				)
		},
		[] //отправляем второй элеметом пустой массив, это говорит о том что данную ф-цию мы хотим использовать только один раз при 
		//вызове usePagination
	)

	return [
		{
			current: page,
			total: totalPage
		},
		setPage // устанавливаем страницу которая нас интересует
	]
}

export function usePersons(page) { // хук в котором используем реактивность, page - то что возвращает usePagination
	const [persons, setPersons] = useState([]) //создаем состояние для пустого массива

	useEffect(
		() => {
			fetch(`/api/person/?_page=${page}&_limit=3`) // задаем количество персон на странице
				.then(answer => answer.json())
				.then(persons => setPersons(persons))
		},
		[page] // передаем чтобы функция менялась каждый раз при изменении page
	) // теперь меняем страницу и пользователи автоматически подгружаются

	function updatePerson(updatedPerson) { // принимает объект с персоной и обновляет локально и внешне
		setPersons(persons => {
			let updated = false

			const ps = persons.slice().map(person => { // если персона не менялась то так и оставляем, иначе обновляем
				if (person.id !== updatedPerson.id) {
					return person
				}

				updated = true

				Object.assign(person, updatedPerson)
				return person
			})

			if (updated) {
				fetch(`/api/person/${updatedPerson.id}`, {
					method: 'PATCH', //используется для обновления данных
					headers: { 'Content-Type': 'application/json' }, // указывает что body будет в json формате
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
	const [popupState, popupDispatch] = useReducer((state, action) => { // редьюсер, функция редактирования состояния
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
	}, { // стартовое состояние
		show: false,
		editMode: false,
		person: null,
		children: null
	})

	return [popupState, popupDispatch]
}