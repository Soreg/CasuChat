import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
 } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Frontpage from '../single_pages/frontpage/Frontpage';
import "babel-polyfill";

class App extends Component{
   render(){
      return(
         <div>
             <Header />

             <Router>
               <Route exact path={ROUTES.LANDING} component={Frontpage} />
             </Router>

             <Footer />
         </div>
      );
   }
}
export default App;