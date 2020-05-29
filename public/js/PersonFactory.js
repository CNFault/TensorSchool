import { Student, Teacher, Person } from './personLib.js';

export class PersonFactory {
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