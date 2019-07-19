import React, { Component } from "react";
import SignUpView from "./SignUpView";
import InformationModal from "./informationModal";
import { Link, withRouter } from 'react-router-dom';

const INITIAL_STATE = {
    inputUsername: '',
    inputEmail: '',
    inputPassword: '',
    inputPasswordRepeat: '',
    inputAgeAccepted: false
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
                this.setState({ error });
            });
        }
    };

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