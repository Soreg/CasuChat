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
    inputAgeAccepted: false
  };
  

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };

        this.inputChanged = this.inputChanged.bind(this);
        this.onAgeRadioChange = this.onAgeRadioChange.bind(this);
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

    onAgeRadioChange() {
        this.setState((prevState) => {
            return { inputAgeAccepted: !prevState.inputAgeAccepted }
        })
    }

    handleSignUp = (e) => {
        e.preventDefault();
        const { inputUsername, inputEmail, inputPassword, inputPasswordRepeat, inputAgeAccepted } = this.state;

        const isInvalid =
        inputPassword !== inputPasswordRepeat ||
        inputPassword === '' ||
        inputEmail === '' ||
        inputUsername === '';
        
        // If passwords match, create account
        if(!isInvalid && inputAgeAccepted) {
            this.props.firebase
            .doCreateUserWithEmailAndPassword(inputEmail, inputPassword)
            .then(authUser => {
                if(authUser) {
                    authUser.user.updateProfile({
                        displayName: inputUsername
                    })
                }
                this.setState({ ...INITIAL_STATE });
            })
            .then(() => {
                this.props.firebase.doSendEmailVerification();
                this.props.firebase.doSignOut();
                console.info('Please check email for confirmation link'); // Replace with modal or message later
            })
            .catch(error => {
                this.setState({ error });
            });
        }
    };

    render() {
        return <SignUpView onAgeRadioChange={this.onAgeRadioChange} onSubmit={this.handleSignUp} inputChanged={this.inputChanged} {...this.state} />;
    }
}

export default withRouter(SignUpContainer);