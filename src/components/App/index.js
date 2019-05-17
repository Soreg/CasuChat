import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
 } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Frontpage from '../single_pages/frontpage/Frontpage';
import AccountPage from '../Account/';
import "babel-polyfill";

class App extends Component{
   render(){
      return(
         <div>
             <Header />

             <Router>
             <Route exact path={ROUTES.LANDING} component={Frontpage} />
             <Route path={ROUTES.ACCOUNT} component={AccountPage} />
             </Router>

             <Footer />
         </div>
      );
   }
}
export default App;