import React, { Component } from "react";

import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            inputUsername: '',
            inputEmail: '',
            inputPassword: '',
            inputPasswordRepeat: '',
            inputBirthday: new Date()
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.pickDate = this.pickDate.bind(this);
    }

    componentDidMount() {
        this.timeoutLoginBox = setTimeout(() => {
            this.setState({
                show: true
            })
        }, 10)
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutLoginBox)
    }

    inputChanged(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    pickDate(date) {
        this.setState({
            birthday: date
        })
    }

    handleSignUp = async(e, username, email, password, date) => {

    };

    render() {
        return <SignUpView onSubmit={this.handleSignUp} inputChanged={this.inputChanged} pickDate={this.pickDate} {...this.state} />;
    }
}

export default SignUpContainer;