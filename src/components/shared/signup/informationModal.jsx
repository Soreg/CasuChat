import React, { Component } from 'react';
import styled from 'styled-components';

const InformationModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);
    visibility: ${props => props.show ? "visible" : "hidden"};
    opacity: ${props => props.show ? "1" : "0"};
    transition: all ease .5s;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const InnerModal = styled.div`
    background: #fff;
    width: 350px;
    z-index: 2000;
    padding-bottom: 15px;
`;

const Headline = styled.h2`
    border-bottom: 1px solid #ccc;
    width: 90%;
    margin: 0 auto 20px;
    padding: 8px 0 4px;
    color: #e79e18;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    font-family: 'Nunito', sans-serif;
`;

const InfoText = styled.p`
    text-align: center;
    font-size: 14px;
    padding: 0 25px;
    line-height: 17px;
`;

const AcceptButton = styled.button`
    &,
    &:focus {
        padding: 7px 0;
        border: none;
        cursor: pointer; 
        width: 350px;
        background: #e79e18;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
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

class InformationModal extends Component {
    render(){
        const { show } = this.props;
        return ( 
            <InformationModalWrapper show={show}>
                <Overlay onClick={this.props.hideInformationModal} />
                <ModalContainer>
                    <InnerModal>
                        <Headline>Email Verification</Headline>
                        <InfoText>A confirmation email has been sent to the provided email. Please follow the steps in the email to access the chat</InfoText>
                    </InnerModal>
                    <AcceptButton onClick={this.props.hideInformationModal}>OK</AcceptButton>
                </ModalContainer>
            </InformationModalWrapper>
        );
    }
}

export default InformationModal;