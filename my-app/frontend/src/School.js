import PersonFactory from './PersonFactory.js'
import React from 'react'

export default function School({ persons }) {
	const pf = new PersonFactory();

	return (
		<div>
			<div id="wraper">
				<header>
					<div className="title">
						<img className="logo" title="Логотип компании Тензор" src="img/logo.jpg" alt="Логотип компании Тензор" />
						<span title="Школа программирования Тензор">Tensor School</span>
						<p title="Это страница школы Тензор">Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.</p>
					</div>
				</header>
			</div>
			<div className="element">{persons.map(x => pf.create(x))}</div>
		</div>
	)
}