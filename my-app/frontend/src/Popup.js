import React, { useContext } from 'react'
import Context from './Context'
import EditForm from './EditForm'


export default function Popup(props) {
    const { popup, setPopup, updatePerson } = useContext(Context)

    if (!popup.show || !popup.person) {
        return null
    }

    if (popup.editMode) {
        return (
            <div className="popup" style={{ display: "block" }}>
                <div>
                    <span className="popup_close" onClick={() => setPopup({ editMode: false, show: false })}>&times;</span>
                </div>
                <div className="content">
                    <EditForm
                        person={popup.person}
                        popup_close={() => setPopup({ editMode: false })}
                        submit={person => {
                            updatePerson(person)
                            setPopup({ editMode: false, show: false })
                        }}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="popup" style={{ display: "block" }}>
            <div>

                <span className="popup_close" onClick={() => setPopup({ show: false })}>&times;</span>
                <span className="popup_edit" onClick={() => setPopup({ editMode: true })}>✎</span>
            </div>
            <div className="content">
                <div>
                    <img className="minImg" src={popup.person.photoUrl} alt="Аватар" title="Аватар" />
                </div>
                <div>
                    {popup.person.status}
                </div>
                {popup.children || <span title="Возраст">{popup.person.age} лет</span>}
            </div>
        </div>
    )
}