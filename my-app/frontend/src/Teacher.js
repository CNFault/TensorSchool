import { Person } from './Person.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup.js';

export class Teacher extends Person {
    constructor(props) {
        super(props);
        this.type = 'Преподаватель';
        this.expirience = props.data.expirience;
        this.position = props.data.position
    }

    get status() {
        return `${this.type}`
    }

    render() {
        return (
            <div className='teacher' onClick={event => this.clickHandler(event)}>
                <img src={this.photoUrl} alt={`Аватар ${this.id}`} title={`Аватар ${this.id}`} />
                <p title="Фамилия Имя">{this.fullName}</p>
                <span title="ВУЗ Курс">{this.position}</span>
            </div>)
    }

    clickHandler() {
        const popup = (
            <Popup user={this}>
                <span>Стаж {this.expirience} лет</span>
            </Popup>
        )

        ReactDOM.render(popup, document.querySelector("#popupPlace"))
    }
}
