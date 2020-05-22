import Component from './Component.js';

export class Person extends Component {
    constructor(name, surname, photoUrl, birthYear) {
        super();
        this.id = Person.idCounter++;
        this.name = name;
        this.surname = surname;
        this.photoUrl = photoUrl;
        this.birthYear = birthYear
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    static idCounter = 1

    render() {
        const div = document.createElement('div');
        div.className = 'student';
        div.innerHTML =
            `<img src=".${this.photoUrl}" alt="Аватар ${this.id}" title="Аватар ${this.id}" /><p title="Фамилия Имя">${this.fullName}</p><span title="ВУЗ Курс">${this.course} курс</span>`;
        return div.outerHTML;
    }

    afterMount() {
        this.container.addEventListener('click', (event) => this.onClick(event));
    }

    onClick() {
        const popup = document.querySelector('.popup');
        const content = document.querySelector('.content');
        content.innerHTML = `<div><img class="minImg" src=".${this.photoUrl}" alt="Аватар" title="Аватар" 
        /></div><p> ${this.status} </p><span title="Возраст">${this.age} лет</span>`;
        popup.style.display = 'block';

        const close = document.querySelector('.close');
        close.addEventListener('click', (event) => {
            popup.style.display = 'none';
        });
    }
}
