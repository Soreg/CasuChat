import React, { Component } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    width: 300px;
`;

const Form = styled.form`
    opacity: 0;
    transform: translateY(-15px);
    transition: all ease .8s;

    &.show {
        transform: translateY(0);
        opacity: 1;
    }
`;

const SignupForm = styled.div`
    background: #fff;
    box-shadow: -7px 6px 5px 0px rgba(0,0,0, 0.4);
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
`;

const FormHeadline = styled.h2`
    border-bottom: 1px solid #ccc;
    width: 90%;
    margin: 0 auto 25px;
    padding: 8px 0 4px;
    color: #e79e18;
    font-weight: bold;
    font-size: 28px;
    font-family: 'Nunito', sans-serif;
`;

const InputWrapper = styled.div`
    padding: 0 30px;
`;

const Input = styled.input`
    width: 100%;
    margin: 0 auto 15px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline-color: #e79e18;
    box-sizing: border-box;
    padding-left: 5px;
    ${props => props.invalid && `border-color: red`};
`;

const RadioInput = styled.input`

`;

const Label = styled.label`
    position: relative;
    font-size: 14px;
    color: grey;
`;

const Button = styled.button`
    &,
    &:focus {
        padding: 7px 0;
        border: none;
        cursor: pointer; 
        width: 300px;
        background: #e79e18;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: -7px 6px 5px 0px rgba(0,0,0, 0.4);
        margin-top: 13px;
        font-size: 22px;
        outline: 0;
        user-select: none;
        transition: all ease .3s;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: -8px 8px 5px 2px rgba(0,0,0, 0.2);
    }

    &:active {
        border: none;
        outline: 0;
        transform: translateY(-1px);
        box-shadow: -5px 4px 5px 0px rgba(0,0,0, 0.7);
    }
`;

const ValidationErrorMessage = styled.p`
    position: absolute;
    top: 43px;
    right: 0;
    color: red;
    font-size: 12px;
`;

class Login extends Component{
    render(){

        const { 
            show, 
            inputUsername, 
            inputEmail, 
            inputPassword,
            inputPasswordRepeat,
            inputAgeAccepted,
            validationErrors
         } = this.props;

        return( 
            <LoginWrapper>
                <Form className={show ? 'show' : ''} onSubmit={(e) => this.props.onSubmit(e)}>
                    <SignupForm>
                        <FormHeadline>
                            Sign up
                        </FormHeadline>
                        <InputWrapper>

                            <Label htmlFor="inputUsername">Username
                                <Input required id="inputUsername" name="inputUsername"  value={inputUsername} onChange={this.props.inputChanged} />
                            </Label>

                            <Label htmlFor="inputEmail">E-Mail
                                <Input required invalid={validationErrors.emailFormat || validationErrors.emailUsed} id="inputEmail" name="inputEmail" type="email" value={inputEmail} onChange={this.props.inputChanged} />
                                {
                                    validationErrors.emailFormat && <ValidationErrorMessage>Wrong email format - please try again</ValidationErrorMessage>
                                }
                                {
                                    validationErrors.emailUsed && <ValidationErrorMessage>Email already in use</ValidationErrorMessage>
                                }
                            </Label>

                            <Label htmlFor="inputPassword">Password
                                <Input required invalid={validationErrors.weakPassword} id="inputPassword" name="inputPassword" type="password"  value={inputPassword} onChange={this.props.inputChanged} />
                                {
                                    validationErrors.weakPassword && <ValidationErrorMessage>Password too weak</ValidationErrorMessage>
                                }
                            </Label>

                            <Label htmlFor="inputPasswordRepeat">Repeat password
                                <Input invalid={validationErrors.passwordMismatch} required id="inputPasswordRepeat" name="inputPasswordRepeat" type="password" value={inputPasswordRepeat} onChange={this.props.inputChanged} />
                                {
                                    validationErrors.passwordMismatch && <ValidationErrorMessage>Passwords doesn't match</ValidationErrorMessage>
                                }
                            </Label>

                            <RadioInput required id="inputAgeAccepted" name="inputAgeAccepted" type="checkbox" checked={inputAgeAccepted} onChange={this.props.onAgeRadioChange} />
                            <Label htmlFor="inputAgeAccepted">I am 13 or older</Label>

                        </InputWrapper>
                    </SignupForm>
                    <Button>Sign up</Button>
                </Form>
            </LoginWrapper>
        );
    }
}

export default Login;