import React from 'react';

export class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            mode: 'popup' // popup | form
        }
    }

    componentWillReceiveProps() { //getDerivedStateFromProps
        if (!this.state.show) {
            this.setState({
                show: true,
                mode: 'popup'
            })
        }
    }

    render() {
        if (!this.state.show) {
            return null
        }

        const { user } = this.props

        if (this.state.mode === 'popup') {
            return (
                <div className="popup" style={{ display: "block" }}>
                    <div>
                        <span className="close" onClick={() => this.setState({ show: false })}>&times;</span>
                        <span className="close" onClick={() => this.setState({ mode: 'form' })}>✎</span>
                    </div>
                    <div className="content">
                        <div>
                            <img className="minImg" src={user.photoUrl} alt="Аватар" title="Аватар" />
                        </div>
                        <p>{user.status} </p>{this.props.children || <span title="Возраст">{user.age} лет</span>}
                    </div>
                </div>
            )
        }

        else if (this.state.mode === 'form') {
            return (
                <div className="popup" style={{ display: "block" }}>
                    <div className="close" onClick={() => this.setState({ show: false })}>&times;</div>
                    <form className="form">

                        <h1 className="form_title">Редактирование</h1>

                        <div className="form_space">
                            <input className="form_input" placeholder=" " value={user.name} onChange={e => this.props.onUserChange({ name: e.target.value })} />
                            <label className="form_label">Введите фамилию</label>
                        </div>

                        <div className="form_space">
                            <input className="form_input" placeholder=" " />
                            <label className="form_label">Введите имя</label>
                        </div>

                        <div className="form_space">
                            <input className="form_input" placeholder=" " />
                            <label className="form_label">Введите курс</label>
                        </div>

                        <div className="form_space">
                            <input className="form_input" placeholder=" " />
                            <label className="form_label">Введите возраст</label>
                        </div>

                        <button className="form_button">Сохранить</button>
                        <button className="form_button_cancel">Отмена</button>
                    </form>
                </div>
            )
        }

    }
}