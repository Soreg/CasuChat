import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
 } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Frontpage from '../single_pages/frontpage/Frontpage';
import AccountPage from '../Account/';

class App extends Component{
   render(){
      return(
         <div>
             <Router>
             <Route exact path={ROUTES.LANDING} component={Frontpage} />
             <Route path={ROUTES.ACCOUNT} component={AccountPage} />
             </Router>
         </div>
      );
   }
}
export default App;