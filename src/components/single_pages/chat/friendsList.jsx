import React, { Component } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  border-right: 1px solid #ccc;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const FriendsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0 10px 10px;
`;

const FriendStatus = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background: green;
`;

class FriendsList extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const amountOnline = FriendsListDummyData.length;

        return(
          <ListContainer>
              <InfoContainer>
                    Online riends: {amountOnline}
              </InfoContainer>
              {
                  FriendsListDummyData &&
                  FriendsListDummyData.length > 0 &&
                  FriendsListDummyData.map(user => {
                    return (
                        <FriendsContainer key={user.id}>
                            <FriendStatus />
                            {user.name}
                        </FriendsContainer>
                    )
                  })
              }
          </ListContainer>
        );
    }
}

const FriendsListDummyData = [
    {
        id: 1,
        name: 'Colin',
        online: true
    }
]

export default FriendsList;