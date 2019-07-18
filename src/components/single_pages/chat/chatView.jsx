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
            chatMessage: '',
            currentChat: null,
            chatrooms: null
        }

        this.updateChatMessage = this.updateChatMessage.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }

    componentDidMount() {
        const { firebase } = this.props;
        const chatRoomsRef = firebase.db.ref('chatrooms');
        chatRoomsRef.on('value', snapshot => {
            const dbChatrooms = snapshot.val();
            const newState = [];
            for (let chatroom in dbChatrooms) {
                const messages = [];

                for (let message in dbChatrooms[chatroom].messages) {
                    messages.push(dbChatrooms[chatroom].messages[message])
                }
                
                newState.push({
                    id: chatroom,
                    title: chatroom,
                    messages
                });
            }

            this.setState({
                chatrooms: newState,
                currentChat: newState[0]
            })
        })
    }

    updateChatMessage(e) {
        this.setState({
            chatMessage: e.target.value
        })
    }

    onSendMessage(e) {
        e.preventDefault();
        const { chatMessage, currentChat } = this.state;
        const { firebase } = this.props;

        const chatRoomsRef = firebase.db.ref(`chatrooms/${currentChat.id}/messages`);

        // Send message to DB
        if(chatMessage.length > 0) {
            const auth = firebase ? firebase.auth : null;
            const user = auth && auth.currentUser ? auth.currentUser : null;
            const displayName = user ? user.displayName : null;

            const d = new Date();
            var timestamp = `${d.getHours()}:${d.getMinutes()}`;

            const message = {
                username: displayName,
                value: chatMessage,
                timestamp
            }

            chatRoomsRef.push(message)
            this.setState({
                chatMessage: ''
            })
        }
    }

    render(){
        const { chatMessage, chatrooms, currentChat } = this.state;
        const { firebase } = this.props;

        const auth = firebase ? firebase.auth : null;
        const user = auth && auth.currentUser ? auth.currentUser : null;
        const displayName = user ? user.displayName : null;

        return user && (
            <>
                <Head />
                    <Wrapper>
                        <ChatContainer>

                            <FriendsList />

                            <ChatInnerContainer>
                                <ChatInfoContainer>
                                    {
                                        user && <ChatInfoUsername>Logged in as: {displayName}</ChatInfoUsername>
                                    }
                                </ChatInfoContainer>
                                <ChatMessageView chatroom={currentChat} displayName={displayName} />
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