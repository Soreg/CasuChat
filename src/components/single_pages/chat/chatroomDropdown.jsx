import React, { Component } from 'react';
import styled from 'styled-components';

const ChatroomDropdownWrapper = styled.select`
    margin-left: auto;
`;

const ChatroomDropdownOption = styled.option`

`;

class ChatroomDropdown extends Component {
  render(){
      const { chatrooms, selectedChatIndex } = this.props;

      return chatrooms && chatrooms.length > 1 && (
        <ChatroomDropdownWrapper onChange={(e) => this.props.onSelectChatroom(e)} value={selectedChatIndex}>
          {
              chatrooms.map((chatroom, i) => {
                  return <ChatroomDropdownOption value={i} key={chatroom.id} data-chat-id={i}>{chatroom.title}</ChatroomDropdownOption>
              })
          }
      </ChatroomDropdownWrapper>
      );
  }
}

export default ChatroomDropdown;