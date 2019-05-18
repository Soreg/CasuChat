import React, { Component } from 'react';
import styled from 'styled-components';
import Signup from '../../shared/signup/index';
import { withFirebase } from '../../Firebase';
import Header from '../../shared/header';
import Footer from '../../shared/footer';

const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 190px);
    background: black;
    padding-top: 130px;
    background-image: linear-gradient(to right, #348AC7, #7474BF);
`;

const InnerWrapper = styled.div`
    padding: 80px 100px;
    display: flex;
    height: 100%;
    box-sizing: border-box;
`;

const LeftWrap = styled.div`
    width: 60%;
`;

const RightWrap = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Headline = styled.h1`
    color: white;
    font-size: 46px;
    margin-bottom: 150px;
`;

const Subtitle = styled.h3`
    color: white;
    font-size: 32px;
    margin: 50px 0;
    max-width: 700px;
    letter-spacing: 1.3px;
`;

const Icon = styled.img`

`;

class Frontpage extends Component {
    constructor(props) {
        super(props);
    }
   render(){
      return(
          <>
            <Head />
            <Wrapper>
                <InnerWrapper>
                    <LeftWrap>
                        <Headline>CasuChat lets you chat with people from all around the globe. Sign up now and start chatting!</Headline>
                        <Subtitle>Chat with people from all around the world</Subtitle>
                        <Subtitle>Add friends and stay in touch</Subtitle>
                        <Subtitle>Messages are saved - Read unread messages when you get back online</Subtitle>
                    </LeftWrap>

                    <RightWrap>
                        <SignUpForm />
                    </RightWrap>
                </InnerWrapper>
            </Wrapper>
            <Footer />
          </>
      );
   }
}

const Head = withFirebase(Header);
const SignUpForm = withFirebase(Signup);

export default Frontpage;