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

const school = new School(document.querySelector('.element'));

let personList = [
    ['Студент', 'Алексей', 'Шипелкин', '/img/ava01.jpg', 2000, 4, 'ЭММ-13'],
    ['Студент', 'Мария', 'Фёдорова', '/img/ava02.jpg', 2001, 3, 'РФ-13'],
    ['Студент', 'Кристина', 'Сидорова', '/img/ava03.jpg', 1995, 1, 'ФЭН-3'],
    ['Преподаватель', 'Андрей', 'Молотов', '/img/ava04.jpg', 1980, 15, 'Профессор'],
    ['Преподаватель', 'Ирина', 'Васильева', '/img/ava05.jpg', 1985, 7, 'Доцент'],
    ['Студент', 'Николай', 'Дроздов', '/img/ava06.jpg', 2003, 4, 'ОР']
];

personList.forEach((data) => {
    school.enroll(...data);
});

school.mount();

const openCard = (student) => {
    const popup = document.querySelector('.popup');
    const content = document.querySelector('.content');
    content.innerHTML = `<div><img class="minImg" src=".${student.photoUrl}" alt="Аватар" title="Аватар" 
    /></div><p> ${student.status} </p><span title="Возраст">${student.age} лет</span>`;
    popup.style.display = 'block';

    const close = document.querySelector('.close');
    close.addEventListener('click', (event) => {
        popup.style.display = 'none';
    });
}




