import React, { useState } from 'react'

function EditForm(props) {
	const [person, setPerson] = useState({ ...props.person })

	return (
		<form className="form" onSubmit={e => {
			e.preventDefault() //отменяем стандартную обработку события
			props.submit(person)
		}}>

			<h1 className="form_title">Изменение данных студента</h1>

			<div className="form_space">
				<input className="form_input" placeholder=" " value={person.name} onChange={e => setPerson({ ...person, name: e.target.value })} />
				<label className="form_label">Введите фамилию</label>
			</div>

			<div className="form_space">
				<input className="form_input" placeholder=" " value={person.surname} onChange={e => setPerson({ ...person, surname: e.target.value })} />
				<label className="form_label">Введите имя</label>
			</div>

			<div className="form_space">
				<input className="form_input" placeholder=" " value={person.course} onChange={e => setPerson({ ...person, course: e.target.value })} />
				<label className="form_label">Введите курс</label>
			</div>
			<div className="form_button_wraper">
				<button type="submit" className="form_button">Сохранить</button>
				<button type="button" className="form_button_cancel" onClick={() => props.close()}>Отмена</button>
			</div>
		</form>
	)
}

export default EditForm