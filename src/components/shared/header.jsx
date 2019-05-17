import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';
import Login from './Login';
import { AuthUserContext } from '../Session';
import { th } from 'date-fns/esm/locale';

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-image: url('./src/img/headerBg.png');
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const HeaderLogo = styled.span`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 150px;
    padding: 5px 10px;
    font-size: 48px;
    background: #b34700;
    font-weight: bold;
    color: white;
    cursor: default;
    user-select: none;
`

const HeaderRightWrap = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginText = styled.span`
    color: white;
    margin-right: 15px;
    font-size: 20px;
    color: #d9d9d9;
`

const LoginButton = styled.button`
    cursor: pointer;
    background: #008bcc;
    outline: 0;
    border: none;
    color: white;
    padding: 8px 12px;
    box-shadow: 2px 3px 3px transparent;
    transition: all ease .3s;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 2px 3px 3px black;
        background: #009de6;
    }

    &:active {
        transform: translateY(0);
        box-shadow: 2px 3px 3px transparent;
        background: #007ab3;
    }
`

const LogoutButton = styled(LoginButton)`

`;

class Header extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showLoginBox: false
        }

        this.showLoginBox = this.showLoginBox.bind(this);
        this.hideLoginBox = this.hideLoginBox.bind(this);
    }

    showLoginBox() {
        this.setState({
            showLoginBox: true
        })
    }

    hideLoginBox() {
        this.setState({
            showLoginBox: false
        })
    }

    render() {
        const { firebase } = this.props;
        return(
            <>
                <LoginForm show={this.state.showLoginBox} hideLoginBox={this.hideLoginBox} />
                <HeaderWrapper>
                    <HeaderLogo>CasuChat</HeaderLogo>
                    <HeaderRightWrap>
                        <AuthUserContext.Consumer>
                        {authUser =>
                            authUser ? (
                                <LogoutButton onClick={firebase.doSignOut}>Logout</LogoutButton>
                            ) : (
                                <>
                                    <LoginText>Already got an account ?</LoginText>
                                    <LoginButton onClick={this.showLoginBox}>Login</LoginButton>
                                </>
                            )
                        }
                        </AuthUserContext.Consumer>
                    </HeaderRightWrap>
                </HeaderWrapper>
            </>
        );
    }
}

const LoginForm = withFirebase(Login);

export default Header;