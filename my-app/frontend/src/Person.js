import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup.js';

export class Person extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.data.id,
            name: props.data.name,
            surname: props.data.surname,
            photoUrl: props.data.photoUrl,
            birthYear: props.data.birthYear,
            course: props.data.course
        }

        console.log(this.state)
    }

    get age() {
        return new Date().getFullYear() - this.state.birthYear;
    }

    get fullName() {
        return `${this.state.name} ${this.state.surname}`
    }

    render() {
        return (
            <div className='person' onClick={event => this.clickHandler(event)}>
                <img src={this.state.photoUrl} alt={`Аватар ${this.state.id}`} title={`Аватар ${this.state.id}`} />
                <p title="Фамилия Имя">{this.state.fullName}</p>
                <span title="ВУЗ Курс">{this.state.course} курс</span>
            </div>)
    }

    clickHandler() {
        ReactDOM.render(<Popup user={this.state} onUserChange={data => {
            console.log(({
                ...this.state,
                ...data
            }))

            this.setState((state) => ({
                ...state,
                ...data
            }))
        }} />, document.querySelector("#popupPlace"))
    }
}
