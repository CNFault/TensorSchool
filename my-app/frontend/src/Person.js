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
        //     const popup = document.querySelector('.popup');
        //     const content = document.querySelector('.content');
        //     content.innerHTML = `<div><img class="minImg" src="${this.photoUrl}" alt="Аватар" title="Аватар" 
        //     /></div><p> ${this.status} </p><span title="Возраст">${this.age} лет</span>`;
        //     popup.style.display = 'block';

        //     const close = document.querySelector('.close');
        //     close.addEventListener('click', (event) => {
        //         popup.style.display = 'none';
        //     });
        // }
        // const popup = (
        //     <div className="popup" style={{ display: "block" }}>
        //         <div className="close" onClick={e => document.querySelector('.popup').style.display = "none"}>&times;</div>
        //         <div className="content">
        //             <div>
        //                 <img className="minImg" src={this.photoUrl} alt="Аватар" title="Аватар" />
        //             </div>
        //             <p>{this.status} </p><span title="Возраст">{this.age} лет</span>
        //         </div>
        //     </div>
        // )

        // ReactDOM.render(popup, document.getElementById('popupPlace'));
    }
}
