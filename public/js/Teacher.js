import { Person } from './Person.js';

export class Teacher extends Person {
    constructor(name, surname, photoUrl, birthYear, expirience, position) {
        super(name, surname, photoUrl, birthYear);
        this.type = 'Преподаватель';
        this.expirience = expirience;
        this.position = position
    }

    get status() {
        return `${this.type}`
    }

    render() {
        const div = document.createElement('div');
        div.className = 'teacher';
        div.innerHTML =
            `<img src=".${this.photoUrl}" alt="Аватар 
            ${this.id}" title="Аватар ${this.id}" /><p title="Фамилия Имя">
            ${this.fullName}</p><span title="ВУЗ Курс"> ${this.position}, стаж - 
            ${this.expirience} лет </span>`;
        return div.outerHTML;
    }
}