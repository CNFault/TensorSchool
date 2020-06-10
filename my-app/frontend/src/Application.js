import React, { useEffect } from 'react'
import Context from './Context'
import School from './School'
import Popup from './Popup'
import Data from './Data'

const DB = Data.create({ object: 'person' })

export default function App() {
	const [state, setState] = React.useState({
		persons: [],

		popup: {
			show: false,
			editMode: false,
			person: null,
			children: null
		},

		setPopup(data) {
			setState(state => ({
				...state,
				popup: {
					...state.popup,
					...data
				}
			}))
		},

		updatePerson(person) {
			setState(state => {
				const { persons } = state

				Object.assign( // обновляем локально
					persons.find(x => x.id === person.id),
					person
				)

				DB.update(person) //отправляем изменения на сервер

				return {
					...state,
					persons
				}
			})
		}
	})

	useEffect(() => { //реализует хуки жизненного цикла
		DB.getAll()
			.then(persons => setState({
				...state,
				persons
			}))
	}, []) //загружаем БД только 1 раз

	return (
		<Context.Provider value={state}>
			<School />
			<Popup />
		</Context.Provider>
	)
}