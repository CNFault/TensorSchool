class Person {
    constructor(name, surname, photoUrl, birthYear) {
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
        div.addEventListener('click', () => {
            openCard(this);
        });
        return div;
    }

    mount(element) {
        const div = this.render();
        element.appendChild(div);
    }
}
