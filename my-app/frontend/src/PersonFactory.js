import { Student } from './Student.js';
import { Teacher } from './Teacher.js';
import { Person } from './Person.js';
import ReactDOM from 'react-dom';
import React from 'react';


export class PersonFactory {
    create(args) {
        switch (args.type) {
            case 'Студент':
                return (<Student data={args} />);
            case 'Преподаватель':
                return (<Teacher data={args} />);
            default:
                return (<Person data={args} />);
        }
    }
}