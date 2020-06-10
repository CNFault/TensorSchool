import Person from './Person.js';
import React from 'react';

export default class Student extends Person {
	constructor(props) {
		super(props);
		this.state.type = 'Студент';
		this.state.course = props.data.course;
		this.state.group = props.data.group;
		this.state.status = `${this.state.type}, ${this.state.course} курс`
	}

	render() {
		return (
			<div className='student' onClick={() => this.handlerClick()}>
				<img src={this.state.photoUrl} alt={`Аватар ${this.state.id}`} title={`Аватар ${this.state.id}`} />
				<p title="Фамилия Имя">{this.state.fullName}</p>
				<span title="ВУЗ Курс">{this.state.course} курс</span>
			</div>)
	}
}