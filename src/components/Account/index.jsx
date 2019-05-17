import React, { Component } from 'react';
import { AccountPageWrapper } from './styles';

class AccountPage extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <AccountPageWrapper>
                Account page
            </AccountPageWrapper>
        );
    }
}

export default AccountPage;