import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const INITIAL_STATE = {
    show: false,
    inputUsername: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordRepeat: '',
    inputBirthday: new Date()
  };
  

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };

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

    handleSignUp = (e) => {
        e.preventDefault();
        const { inputUsername, inputEmail, inputPassword, inputPasswordRepeat } = this.state;

        const isInvalid =
        inputPassword !== inputPasswordRepeat ||
        inputPassword === '' ||
        inputEmail === '' ||
        inputUsername === '';
        
        // If passwords match, create account
        if(!isInvalid) {
            this.props.firebase
            .doCreateUserWithEmailAndPassword(inputEmail, inputPassword)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.ACCOUNT);
            })
            .catch(error => {
                this.setState({ error });
            });
        }
    };

    render() {
        return <SignUpView onSubmit={this.handleSignUp} inputChanged={this.inputChanged} pickDate={this.pickDate} {...this.state} />;
    }
}

export default withRouter(SignUpContainer);