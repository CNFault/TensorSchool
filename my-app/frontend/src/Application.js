import React from 'react'
import Context from './Context'
import School from './School'
import Popup from './Popup'
import Pagination from './Pagination'

import { usePagination, usePersons, usePopup } from './UserHooks'

export default function App() {
	const [pagination, setPage] = usePagination('person') // передаем по какой модели хотим сделать пагинацию
	const [persons, updatePerson] = usePersons(pagination.current)
	const [popupState, popupDispatch] = usePopup() // деструктуризация

	return ( /*контекст - props доступный для всего дочернего элемента, обеспечивает доступ к каким либо параметрам отовсюду*/
		<Context.Provider value={{ popupDispatch, updatePerson }}>  {/*то что доджно быть доступно везде*/}
			<School persons={persons} /> {/*передаем персон, которые будут динамически обновляться за счет useEffect*/}
			<Pagination pagination={pagination} setPage={setPage} />
			<Popup popupState={popupState} />
		</Context.Provider>
	)
}