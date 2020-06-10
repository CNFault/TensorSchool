import Student from './Student.js';
import Teacher from './Teacher.js';
import Person from './Person.js';
import React from 'react';

export default class PersonFactory {
	create(args) {
		switch (args.type) {
			case 'Студент':
				return (<Student data={args} key={args.name + args.surname} />);
			case 'Преподаватель':
				return (<Teacher data={args} key={args.name + args.surname} />);
			default:
				return (<Person data={args} key={args.name + args.surname} />);
		}
	}
}