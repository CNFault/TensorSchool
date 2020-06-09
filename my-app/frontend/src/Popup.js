import React from 'react';

export class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    componentWillReceiveProps() { //getDerivedStateFromProps
        if (!this.state.show)
            this.setState({ show: true })
    }

    render() {
        if (!this.state.show) {
            return null
        }

        return (
            <div className="popup" style={{ display: "block" }}>
                <div className="close" onClick={() => this.setState({ show: false })}>&times;</div>
                <div className="content">
                    <div>
                        <img className="minImg" src={this.props.user.photoUrl} alt="Аватар" title="Аватар" />
                    </div>
                    <p>{this.props.user.status} </p>{this.props.children || <span title="Возраст">{this.props.user.age} лет</span>}
                </div>
            </div>
        )
    }
}