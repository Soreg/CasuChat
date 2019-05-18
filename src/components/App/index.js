import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import Frontpage from '../single_pages/frontpage/Frontpage';
import AccountPage from '../Account';
import { AuthUserContext } from '../Session'

class App extends Component{
   constructor(props) {
      super(props);

      this.state = {
         authUser: null
      };
   }

   componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

   render(){
      return(
         <div>
            <AuthUserContext.Provider value={this.state.authUser}>
               <Router>
               <Route exact path={ROUTES.LANDING} component={Frontpage} authUser={this.state.authUser} />
               <Route path={ROUTES.ACCOUNT} component={AccountPageView} authUser={this.state.authUser} />
               </Router>
             </AuthUserContext.Provider>
         </div>
      );
   }
}

const AccountPageView = withFirebase(AccountPage);

export default withFirebase(App);