import { Person } from './Person.js';

export class Student extends Person {
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