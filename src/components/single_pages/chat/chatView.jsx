import React, { Component } from 'react';
import styled from 'styled-components';
import { withFirebase } from '../../Firebase';
import Header from '../../shared/header';
import Footer from '../../shared/footer';
import ChatMessageView from './chatMessageView';
import UserList from './userList';
import FriendsList from './friendsList';
import ChatInput from './chatInput';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 190px);
    padding-top: 130px;
    background-image: linear-gradient(to right, #348AC7, #7474BF);
`;

const ChatContainer = styled.div`
    display: flex;
    width: calc(100% - 200px);
    height: calc(100% - 150px);
    background: #f9f9f9;
`;

const ChatInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const ChatInfoContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #ccc;
`;

const ChatInfoUsername = styled.div`
    margin-left: auto;
`;


class ChatView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatMessage: ''
        }

        this.updateChatMessage = this.updateChatMessage.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }

    updateChatMessage(e) {
        this.setState({
            chatMessage: e.target.value
        })
    }

    onSendMessage(e) {
        e.preventDefault();

        const { chatMessage } = this.state;

        if(chatMessage.length > 0) {
            // Send message to database
            // Send with username, messageid (for key), timestamp and message
        }
    }

    render(){
        const { chatMessage } = this.state;

        return(
            <>
                <Head />
                    <Wrapper>
                        <ChatContainer>

                            <FriendsList />

                            <ChatInnerContainer>
                                <ChatInfoContainer>
                                    <ChatInfoUsername>Logged in as: Soreg</ChatInfoUsername>
                                </ChatInfoContainer>
                                <ChatMessageView />
                                <ChatInput chatMessage={chatMessage} updateChatMessage={this.updateChatMessage} onSendMessage={this.onSendMessage} />
                            </ChatInnerContainer>

                            <UserList />
                            
                        </ChatContainer>
                    </Wrapper>
                <Footer />
            </>
        );
    }
}

const Head = withFirebase(Header);

export default ChatView;