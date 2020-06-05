import { Person } from './Person.js';
import React from 'react';
import ReactDOM from 'react-dom';

export class Student extends Person {
    constructor(props) {
        super(props);
        this.type = 'Студент';
        this.course = props.data.course;
        this.group = props.data.group
    }

    get status() {
        return `${this.type}, ${this.props.data.course} курс`
    }

    render() {
        return (
            <div className='student' onClick={event => this.clickHandler(event)}>
                <img src={this.photoUrl} alt={`Аватар ${this.id}`} title={`Аватар ${this.id}`} />
                <p title="Фамилия Имя">{this.fullName}</p>
                <span title="ВУЗ Курс">{this.course} курс</span>
            </div>)
    }
}