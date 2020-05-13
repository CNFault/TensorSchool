class Student extends Person {
    constructor(name, surname, photoUrl, birthYear, course, group) {
        super(name, surname, photoUrl, birthYear, course, group);
        this.type = 'Студент';
        this.course = course;
        this.group = group
    }
    get status() {
        return `${this.type}, ${this.course} курс, группа ${this.group}`
    }
}

class Teacher extends Person {
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
            `<img src=".${this.photoUrl}" alt="Аватар ${this.id}" title="Аватар ${this.id}" /><p title="Фамилия Имя">${this.fullName}</p><span title="ВУЗ Курс"> ${this.position} </span>`;
        div.addEventListener('click', () => {
            openCard(this);
        });
        return div;
    }
}

class PersonFactory {
    create(type, ...args) {
        switch (type) {
            case 'Студент':
                return new Student(...args);
            case 'Преподаватель':
                return new Teacher(...args);
            default:
                return new Person(...args);
        }
    }
}

class School {
    constructor(mountElement) {
        this.mountElement = mountElement;
        this.persons = [];
        this.pf = new PersonFactory;
    }
    enroll(type, ...args) {
        const person = this.pf.create(type, ...args);
        this.persons.push(person);
    }
    dismiss(person) {
        const index = this.persons.indexOf(person);
        this.persons.splice(index, 1);
    }
    search(name) {
        return this.persons.filter(person => person.name === name);
    }
    mount() {
        this.persons.forEach((person) => {
            person.mount(this.mountElement);
        });
    }
}

const school = new School(document.querySelector('.element'));

let personList = [
    ['Студент', 'Алексей', 'Шипелкин', '/img/ava01.jpg', 2000, 4, 'ЭММ-13'],
    ['Студент', 'Мария', 'Фёдорова', '/img/ava02.jpg', 2001, 3, 'РФ-13'],
    ['Студент', 'Кристина', 'Сидорова', '/img/ava03.jpg', 1998, 1, 'ФЭН-3'],
    ['Преподаватель', 'Андрей', 'Молотов', '/img/ava04.jpg', 1990, 5, 'Профессор'],
    ['Преподаватель', 'Ирина', 'Васильева', '/img/ava05.jpg', 1986, 7, 'Доцент'],
    ['Студент', 'Николай', 'Дроздов', '/img/ava06.jpg', 2003, 4, 'ОР']
];


personList.forEach((data) => {
    school.enroll(...data);
    /*Person.appendStudentBlock();*/
});

school.mount();

const openCard = (student) => {
    const popup = document.querySelector('.popup');
    const content = document.querySelector('.content');
    content.innerHTML = `<div><img class="minImg" src=".${student.photoUrl}" alt="Аватар" title="Аватар" /></div><p title="Фамилия Имя">${student.status} </p><span title="Возраст">${student.age} лет</span>`;
    popup.style.display = 'block';

    const close = document.querySelector('.close');
    close.addEventListener('click', (event) => {
        popup.style.display = 'none';
    });
}

school.dismiss(['Преподаватель', 'Андрей', 'Молотов', '/img/ava04.jpg', 1990, 5, 'Профессор']);
console.log(personList);

/*
function text() {
    let txt;
    count = this.teachingExperience;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = this.teachingExperience % 10;

        if (count == 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return txt;*/