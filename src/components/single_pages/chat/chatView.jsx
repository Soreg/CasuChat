import React, { Component } from 'react';
import styled from 'styled-components';
import { withFirebase } from '../../Firebase';
import { withRouter } from 'react-router-dom';
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
    max-width: 1200px;
    min-height: 150px;
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

`;

const ChatroomDropdown = styled.select`
    margin-left: auto;
`;

const ChatroomDropdownOption = styled.option`

`;


class ChatView extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            chatMessage: '',
            currentChat: null,
            chatrooms: null,
            selectedChatIndex: 0
        }

        this.updateChatMessage = this.updateChatMessage.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        this.onSelectChatroom = this.onSelectChatroom.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
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

            if (this._isMounted) {
                const { selectedChatIndex } = this.state;
                this.setState({
                    chatrooms: newState,
                    currentChat: newState[selectedChatIndex]
                })
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
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

    onSelectChatroom(e) {
        const { chatrooms } = this.state;
        var selectedChatIndex = e.target[e.target.selectedIndex].getAttribute('data-chat-id')
        this.setState({
            currentChat: chatrooms[selectedChatIndex],
            selectedChatIndex
        })
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
                                    {
                                        chatrooms && chatrooms.length > 1 && (
                                            <ChatroomDropdown onChange={(e) => this.onSelectChatroom(e)}>
                                                {
                                                    chatrooms.map((chatroom, i) => {
                                                        return <ChatroomDropdownOption key={chatroom.id} data-chat-id={i}>{chatroom.title}</ChatroomDropdownOption>
                                                    })
                                                }
                                            </ChatroomDropdown>
                                        )
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

const Head = withRouter(withFirebase(Header));

export default ChatView;