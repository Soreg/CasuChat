import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import Header from '../shared/header';
import Footer from '../shared/footer';
import { 
    AccountPageWrapper, 
    AccountPageInnerWrapper,
    PageHeadline, 
    MultiViewWrapper,
    MultiView,
    MultiViewHeadline,
    SettingsLineWrapper,
    InfoLine,
    UnderlinedButton
} from './styles';

class AccountPage extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const { firebase } = this.props;
        const auth = firebase ? firebase.auth : null;
        const user = auth && auth.currentUser ? auth.currentUser : null;

        return user && user.emailVerified && (
            <>
                <Head />
                <AccountPageWrapper>

                    <AccountPageInnerWrapper>
                        <PageHeadline>Settings</PageHeadline>
                        <MultiViewWrapper>

                            <MultiView border>
                                <MultiViewHeadline>Account</MultiViewHeadline>
                                <SettingsLineWrapper>
                                    <InfoLine>Username: {user.displayName ? user.displayName : 'not set'}</InfoLine>
                                    <UnderlinedButton>Edit</UnderlinedButton>
                                </SettingsLineWrapper>

                                <SettingsLineWrapper>
                                    <InfoLine>Email (Not visible to others): {user.email}</InfoLine>
                                    <UnderlinedButton>Edit</UnderlinedButton>
                                </SettingsLineWrapper>
                            </MultiView>

                            <MultiView>
                                <MultiViewHeadline>General settings</MultiViewHeadline>
                            </MultiView>

                        </MultiViewWrapper>        
                    </AccountPageInnerWrapper>
                
                </AccountPageWrapper>
                <Footer />
            </>
        );
    }
}

const Head = withRouter(withFirebase(Header));

export default AccountPage;