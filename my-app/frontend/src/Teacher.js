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
                <span title="ВУЗ Курс">{this.position}, стаж - {this.expirience} лет </span>
            </div>)
    }

    clickHandler() {
        ReactDOM.render(<Popup user={this} />, document.querySelector("#popupPlace"))
        //     const popup = (
        //         <div className="popup" style={{ display: "block" }}>
        //             <div className="close" onClick={e => document.querySelector('.popup').style.display = "none"}>&times;</div>
        //             <div className="content">
        //                 <div>
        //                     <img className="minImg" src={this.photoUrl} alt="Аватар" title="Аватар" />
        //                 </div>
        //                 <p>{this.status} </p><span title="Возраст">{this.age} лет</span>
        //             </div>
        //         </div>
        //     )

        //     ReactDOM.render(popup, document.getElementById('popupPlace'));
    }
}
