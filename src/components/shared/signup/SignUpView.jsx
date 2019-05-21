import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    margin: 0 auto 30px;
    padding: 8px 0 4px;
    color: #e79e18;
    font-weight: bold;
    font-size: 28px;
`;

const InputWrapper = styled.div`
    padding: 0 30px;
`;

const Input = styled.input`
    width: 100%;
    margin: 0 auto 20px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline-color: #e79e18;
    box-sizing: border-box;
    padding-left: 5px;
`;

const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    margin: 0 auto 20px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline-color: #e79e18;
    box-sizing: border-box;
    padding-left: 5px;
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

class Login extends Component{
    render(){

        const { 
            show, 
            inputUsername, 
            inputEmail, 
            inputPassword,
            inputPasswordRepeat, 
            inputBirthday

         } = this.props;

        return( 
            <LoginWrapper>
                <Form className={show ? 'show' : ''} onSubmit={(e) => this.props.onSubmit(e)}>
                    <SignupForm>
                        <FormHeadline>
                            Sign up
                        </FormHeadline>
                        <InputWrapper>
                            <Input name="inputUsername" placeholder="Username" value={inputUsername} onChange={this.props.inputChanged} />
                            <Input name="inputEmail" type="email" placeholder="E-Mail" value={inputEmail} onChange={this.props.inputChanged} />
                            <Input name="inputPassword" type="password" placeholder="Password" value={inputPassword} onChange={this.props.inputChanged} />
                            <Input name="inputPasswordRepeat" type="password" placeholder="Confirm Password" value={inputPasswordRepeat} onChange={this.props.inputChanged} />
                            <StyledDatePicker selected={inputBirthday} onChange={this.props.pickDate} />
                        </InputWrapper>
                    </SignupForm>
                    <Button>Sign up</Button>
                </Form>
            </LoginWrapper>
        );
    }
}

export default Login;