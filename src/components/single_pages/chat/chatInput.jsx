import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-top: 1px solid #ccc;
`;

class ChatInput extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
          <InputWrapper>

          </InputWrapper>
        );
    }
}

export default ChatInput;