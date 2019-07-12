import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.form`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-top: 1px solid #ccc;
  padding: 0 30px;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  padding: 0 10px;
`;

class ChatInput extends Component {
    constructor(props) {
        super(props);
    }

    render(){
      const { chatMessage, updateChatMessage, onSendMessage } = this.props;

        return(
          <InputWrapper onSubmit={onSendMessage}>
            <Input type="text" value={chatMessage} onChange={updateChatMessage} />
          </InputWrapper>
        );
    }
}

export default ChatInput;