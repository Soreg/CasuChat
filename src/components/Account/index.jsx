import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
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
        return(
            <>
                <Head />
                <AccountPageWrapper>

                    <AccountPageInnerWrapper>
                        <PageHeadline>Settings</PageHeadline>
                        <MultiViewWrapper>

                            <MultiView border>
                                <MultiViewHeadline>Account</MultiViewHeadline>
                                <SettingsLineWrapper>
                                    <InfoLine>Username: </InfoLine>
                                    <UnderlinedButton>Edit</UnderlinedButton>
                                </SettingsLineWrapper>

                                <SettingsLineWrapper>
                                    <InfoLine>Email (Not visible to others): </InfoLine>
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

const Head = withFirebase(Header);

export default AccountPage;