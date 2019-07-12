import React, { Component } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  border-left: 1px solid #ccc;
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

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0 10px 10px;
`;

const UserStatus = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    ${props => props.away === true ? `
        background: orange;
    ` : `
        background: green;
    `}
`;

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const amountOnline = userListDummyData.length;

        return(
          <ListContainer>
              <InfoContainer>
                  Online users: {amountOnline}
              </InfoContainer>
              {
                  userListDummyData &&
                  userListDummyData.length > 0 &&
                  userListDummyData.map(user => {
                    return (
                        <UserContainer key={user.id}>
                            <UserStatus away={user.away} />
                            {user.name}
                        </UserContainer>
                    )
                  })
              }
          </ListContainer>
        );
    }
}

const userListDummyData = [
    {
        id: 1,
        name: 'Colin',
        away: true
    },
    {
        id: 2,
        name: 'Tudi',
        away: false
    },
    {
        id: 3,
        name: 'Nibo',
        away: true
    },
    {
        id: 4,
        name: 'Ginger',
        away: false
    },
    {
        id: 5,
        name: 'André',
        away: false
    }
]

export default UserList;