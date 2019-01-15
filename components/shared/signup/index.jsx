import React, { Component } from "react";
import base from "../../shared/base";

import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
    handleSignUp = async(e, username, email, password, date) => {
        e.preventDefault();
        try {
            const user = await base
            .auth()
            .createUserWithEmailAndPassword(email, password);
            base.auth().onAuthStateChanged(function(user) {
                if (user) {
                  user.updateProfile({
                    displayName: username,
                  });     
                }
            })
        } catch (error) {
            alert(error);
        }
    };

    render() {
        return <SignUpView onSubmit={this.handleSignUp} />;
    }
}

export default SignUpContainer;