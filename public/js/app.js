import { Student, Teacher, PersonFactory, School, Person } from './personLib.js';

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
