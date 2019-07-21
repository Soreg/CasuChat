import React, { Component } from "react";
import SignUpView from "./SignUpView";
import InformationModal from "./informationModal";
import { Link, withRouter } from 'react-router-dom';

const INITIAL_STATE = {
    inputUsername: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordRepeat: '',
    inputAgeAccepted: false,
    validationErrors: {
        emailFormat: false,
        emailUsed: false,
        weakPassword: false,
        passwordMismatch: false
    }
  };
  

class SignUpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            ...INITIAL_STATE,
            show: false
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.onAgeRadioChange = this.onAgeRadioChange.bind(this);
        this.hideInformationModal = this.hideInformationModal.bind(this);
        this.handleValidationError = this.handleValidationError.bind(this);
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

        const passwordsMatch = inputPassword === inputPasswordRepeat;
        
        // If passwords match, create account
        if(passwordsMatch) {
            this.props.firebase
            .doCreateUserWithEmailAndPassword(inputEmail, inputPassword)
            .then(authUser => {
                // Update user with given data
                if(authUser) {
                    authUser.user.updateProfile({
                        displayName: inputUsername
                    })
                }
                this.setState({ ...INITIAL_STATE });
            })
            .then(() => {
                // Send email verification
                this.props.firebase.doSendEmailVerification();
                this.setState({
                    showInformationModal: true
                })
            })
            .catch(error => {
                const errorCode = error.code;

                this.handleValidationError(errorCode);
            });
        } else {
            this.handleValidationError('auth/no-password-match')
        }
    };

    handleValidationError(code) {
        const validationErrors = Object.assign({}, INITIAL_STATE.validationErrors);

        switch (code) {
            case 'auth/invalid-email':
                validationErrors.emailFormat = true
                break;
            case 'auth/weak-password':
                validationErrors.weakPassword = true
                break;
            case 'auth/email-already-in-use':
                validationErrors.emailUsed = true
                break;
            case 'auth/no-password-match':
                validationErrors.passwordMismatch = true
                break;
            default: 
                this.setState({ ...INITIAL_STATE });
                break;
        }

        this.setState({ validationErrors })
    }

    hideInformationModal() {
        this.setState({
            showInformationModal: false
        })
    };

    render() {
        return (
            <>
                <SignUpView onAgeRadioChange={this.onAgeRadioChange} onSubmit={this.handleSignUp} inputChanged={this.inputChanged} {...this.state} />
                <InformationModal show={this.state.showInformationModal} hideInformationModal={this.hideInformationModal} />
            </>
        )
    }
}

export default withRouter(SignUpContainer);