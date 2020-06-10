import Person from './Person.js';
import React from 'react';

export default class Teacher extends Person {
    constructor(props) {
        super(props);
        this.state.type = 'Преподаватель';
        this.state.expirience = props.data.expirience;
        this.state.position = props.data.position
    }

    get status() {
        return `${this.type}`
    }

    render() {
        return (
            <div className='teacher' onClick={() => this.handlerClick()}>
                <img src={this.state.photoUrl} alt={`Аватар ${this.state.id}`} title={`Аватар ${this.state.id}`} />
                <p title="Фамилия Имя">{this.state.fullName}</p>
                <span title="ВУЗ Курс">{this.state.position}</span>
            </div>)
    }

    handlerClick() {
        super.handlerClick(<span>Стаж {this.state.expirience} лет</span>)
    }
}
