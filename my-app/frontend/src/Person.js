import React from 'react'
import Context from './Context.js'

export default class Person extends React.Component {
    constructor (props) {
        super(props)

        this.state = {id: props.data.id,
            name: props.data.name,
            surname: props.data.surname,
            photoUrl: props.data.photoUrl,
            birthYear: props.data.birthYear,
            course: props.data.course,
            age: new Date().getFullYear() - props.data.birthYear,
            fullName: `${props.data.name} ${props.data.surname}`
        }
    }

    handlerClick (children = null) {
        this.context.setPopup({
            show: true,
            person: this.state,
            children
        })
    }

    render () {
        return (
            <div className='person' onClick={() => this.handlerClick()}>
                <img src={this.state.photoUrl} alt={`Аватар ${this.state.id}`} title={`Аватар ${this.state.id}`} />
                <p title="Фамилия Имя">{this.state.fullName}</p>
                <span title="ВУЗ Курс">{this.state.course} курс</span>
            </div>
        )
    }
}

Person.contextType = Context