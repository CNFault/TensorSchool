class Student {
    constructor({ fullName, university, course, photoUrl, birthYear }) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.photoUrl = photoUrl;
        this.birthYear = birthYear
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
    get education() {
        return `${this.university} ${this.course}`;
    }
    appendStudentBlock() {
        const div = document.createElement('div');
        div.className = 'student';
        div.innerHTML =
            '<img src=".' + this.photoUrl + '" alt="Аватар 1" title="Аватар 1" />' +
            '<p title="Фамилия Имя">' + this.fullName + '</p>' +
            '<span title="ВУЗ Курс">' + this.education + ' курс' + '</span>';
        document.body.appendChild(div);

        div.addEventListener('click', () => {
            openCard(this);
        });
    }

}



const studentArr = [
    {
        fullName: 'Алексей Шипелкин',
        university: 'УГАТУ',
        course: 2,
        photoUrl: '/img/ava01.jpg',
        birthYear: 2000
    },
    {
        fullName: 'Мария Фёдорова',
        university: 'НГТУ',
        course: 3,
        photoUrl: '/img/ava02.jpg',
        birthDate: '2001'
    },
    {
        fullName: 'Кристина Сидорова',
        university: 'НГАСУ',
        course: 1,
        photoUrl: '/img/ava03.jpg',
        birthDate: 1998
    },
    {
        fullName: 'Андрей Молотов',
        university: 'НГАХА',
        course: 5,
        photoUrl: '/img/ava04.jpg',
        birthDate: 1990
    },
    {
        fullName: 'Ирина Васильева',
        university: 'НГУ',
        course: 4,
        photoUrl: '/img/ava05.jpg',
        birthDate: 1992
    },
    {
        fullName: 'Николай Дроздов',
        university: 'ЮУРГУ',
        course: 2,
        photoUrl: '/img/ava06.jpg',
        birthDate: 2003
    },
];

studentArr.forEach((item) => {
    const student = new Student(item);
    student.appendStudentBlock();
});

const openCard = (student) => {
    const popup = document.querySelector('.popup');
    const content = document.querySelector('.content');
    content.innerHTML = '<div><img class="minImg" src=".' + student.photoUrl +
        '" alt="Аватар" title="Аватар" /></div>' + '<p title="Фамилия Имя">' + student.fullName + ' </p>' +
        '<span title="Dозраст">' + student.age + ' лет' + '</span>';
    popup.style.display = 'block';


    const close = document.querySelector('.close');
    close.addEventListener('click', (event) => {
        popup.style.display = 'none';
    });
}

