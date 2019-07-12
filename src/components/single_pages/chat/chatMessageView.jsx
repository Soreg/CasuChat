import React, { Component } from 'react';
import styled from 'styled-components';

const MessagesView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 30px;
`;

const ChatMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.myMessage ? `align-items: flex-start` : `align-items: flex-end`};
`;

const ChatMessage = styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin: 5px 15px;
    box-shadow: 2px 3px 4px rgba(0,0,0, 0.1);
    word-break: break-word;
`;

const ChatMessageName = styled.p`
    padding: 0 15px;
    margin-top: 20px;
    font-size: 13px;
    color: #6b6b6b;
    font-weight: bold;
`;

class ChatMessageView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        var scrollContainer = document.querySelector('.scroll-container');
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }

    render(){
        const { chatroom, displayName } = this.props;
        const messages = chatroom ? chatroom.messages : null;

        return(
          <MessagesView className="scroll-container">
              {messages && messages.map((message, i) => {
                  const myMessage = displayName === message.username;
                  return (
                    <ChatMessageContainer myMessage={myMessage} key={i}>
                        <ChatMessageName>Sent by {myMessage ? 'me' : message.username} {message.timestamp && `- ${message.timestamp}`}</ChatMessageName>
                        <ChatMessage>{message.value}</ChatMessage>
                    </ChatMessageContainer>
                  )
              })}
          </MessagesView>
        );
    }
}

export default ChatMessageView;