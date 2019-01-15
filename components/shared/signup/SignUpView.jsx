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
        border: none;
        cursor: pointer; 
        width: 300px;
        height: 30px;
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
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            username: '',
            email: '',
            password: '',
            passwordRepeat: '',
            birthday: new Date()
        }

        this.signup = this.signup.bind(this);
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

    signup(e) {
        e.preventDefault();
        const { username, email, password, passwordRepeat } = this.state;
        
        // Handle form validation
        // Signup if success
        this.props.onSubmit(e, username, email, password, passwordRepeat);
    }

    render(){
        return( 
            <LoginWrapper>
                <Form className={this.state.show ? 'show' : ''} onSubmit={this.signup}>
                    <SignupForm>
                        <FormHeadline>
                            Sign up
                        </FormHeadline>
                        <InputWrapper>
                            <Input name="username" placeholder="Username" value={this.state.username} onChange={this.inputChanged} />
                            <Input name="email" placeholder="E-Mail" value={this.state.email} onChange={this.inputChanged} />
                            <Input name="password" placeholder="Password" value={this.state.password} onChange={this.inputChanged} />
                            <Input name="passwordRepeat" placeholder="Confirm Password" value={this.state.passwordRepeat} onChange={this.inputChanged} />
                            <StyledDatePicker selected={this.state.birthday} onChange={this.pickDate} />
                        </InputWrapper>
                    </SignupForm>
                    <Button>Sign up</Button>
                </Form>
            </LoginWrapper>
        );
    }
    }

export default Login;