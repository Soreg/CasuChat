import React, { Component } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);
    z-index: 1000;
`;

const LoginForm = styled.form`

`;

const LoginContainer = styled.div`
    background: #fff;
    position: fixed;
    top: 45%
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    z-index: 2000;
    padding-bottom: 15px;
`;

const Headline = styled.h2`
    border-bottom: 1px solid #ccc;
    width: 90%;
    margin: 0 auto 30px;
    padding: 8px 0 4px;
    color: #e79e18;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
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

const SubmitButton = styled.button`
    &,
    &:focus {
        position: absolute;
        top: calc(45% + 100px);
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        cursor: pointer; 
        width: 350px;
        height: 30px;
        background: #e79e18;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        font-size: 22px;
        outline: 0;
        user-select: none;
        z-index: 2000;
    }

    &:active {
        border: none;
        outline: 0;
    }
`;

class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.hideLoginBox = this.hideLoginBox.bind(this);
    }

    inputChanged(e) {
        this.setState({
            [e.currentTarget.name]: [e.currentTarget.value]
        })
    }

    doLogin(e) {
        e.preventDefault();
    }

    hideLoginBox() {
        if(this.state.username || this.state.password) {
            this.setState({
                username: '',
                password: ''
            })
        }
        this.props.hideLoginBox();
    }

    render(){
        return this.props.show ? ( 
            <>
                <Overlay onClick={this.hideLoginBox} />
                <LoginForm>
                    <LoginContainer>
                        <Headline>Login</Headline>
                        <InputWrapper>
                            <Input name='username' placeholder="Username" value={this.state.username} onChange={this.inputChanged} />
                            <Input name='password' placeholder="Password" value={this.state.password} onChange={this.inputChanged} />
                        </InputWrapper>
                    </LoginContainer>
                    <SubmitButton onClick={this.doLogin}>Login</SubmitButton>
                </LoginForm>
            </>
        )
        : null;
    }
}

export default Login;