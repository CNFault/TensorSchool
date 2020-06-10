import React, { useContext } from 'react'
import Context from './Context'
import EditForm from './EditForm'


export default function Popup({ popupState }) {
	const { updatePerson, popupDispatch } = useContext(Context)

	if (!popupState.show || !popupState.person) {
		return null
	}

	if (popupState.editMode) {
		return (
			<div className="popup" style={{ display: "block" }}>
				<div className="content">
					<EditForm
						person={popupState.person}
						close={() => popupDispatch({ type: "OPEN" })}
						submit={person => {
							updatePerson(person)
							popupDispatch({ type: "CLOSE" })
						}}
					/>
				</div>
			</div>
		)
	}

	return (
		<div className="popup" style={{ display: "block" }}>
			<div>

				<span className="popup_close" onClick={() => popupDispatch({ type: "CLOSE" })}>&times;</span>
				<span className="popup_edit" onClick={() => popupDispatch({ type: "EDIT" })}>✎</span>
			</div>
			<div className="content">
				<div>
					<img className="minImg" src={popupState.person.photoUrl} alt="Аватар" title="Аватар" />
				</div>
				<div className="popup_info">
					<div className="popup_info_name">{popupState.person.fullName}</div>
					<div className="popup_info_course">{popupState.person.status}</div>
				</div>
				{popupState.children || <span className="popup_info_age" title="Возраст">{popupState.person.age} лет</span>}
			</div>
		</div>
	)
}