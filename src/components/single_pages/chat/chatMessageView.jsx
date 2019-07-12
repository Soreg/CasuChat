import React, { Component } from 'react';
import styled from 'styled-components';

const MessagesView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

class ChatMessageView extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
          <MessagesView>

          </MessagesView>
        );
    }
}

export default ChatMessageView;