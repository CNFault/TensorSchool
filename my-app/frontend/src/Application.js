import React from 'react'
import Context from './Context'
import School from './School'
import Popup from './Popup'
import Pagination from './Pagination'

import { usePagination, usePersons, usePopup } from './UserHooks'

export default function App() {
	const [pagination, setPage] = usePagination('person')
	const [persons, updatePerson] = usePersons(pagination.current)
	const [popupState, popupDispatch] = usePopup()

	return (
		<Context.Provider value={{ popupDispatch, updatePerson }}>
			<School persons={persons} />
			<Pagination pagination={pagination} setPage={setPage} />
			<Popup popupState={popupState} />
		</Context.Provider>
	)
}