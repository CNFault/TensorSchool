import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup.js';

export class Person extends React.Component {
    constructor(props) {
        super(props);
        this.id = Person.idCounter++;
        this.name = props.data.name;
        this.surname = props.data.surname;
        this.photoUrl = props.data.photoUrl;
        this.birthYear = props.data.birthYear;
        this.course = props.data.course
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    static idCounter = 1

    render() {
        return (
            <div className='person' onClick={event => this.clickHandler(event)}>
                <img src={this.photoUrl} alt={`Аватар ${this.id}`} title={`Аватар ${this.id}`} />
                <p title="Фамилия Имя">{this.fullName}</p>
                <span title="ВУЗ Курс">{this.course} курс</span>
            </div>)
    }

    clickHandler() {
        ReactDOM.render(<Popup user={this} />, document.querySelector("#popupPlace"))
    }
}
