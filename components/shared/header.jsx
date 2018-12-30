import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-image: url('./img/headerBg.png');
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

class Header extends Component{
   render(){
      return(
         <HeaderWrapper>
             <HeaderLogo>CasuChat</HeaderLogo>
             <HeaderRightWrap>
                 <LoginText>Already got an account ?</LoginText>
                 <LoginButton>Login</LoginButton>
             </HeaderRightWrap>
         </HeaderWrapper>
      );
   }
}

export default Header;