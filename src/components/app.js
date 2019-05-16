import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Frontpage from './single_pages/frontpage/Frontpage';
import Base from './shared/base';
import "babel-polyfill";

class App extends Component{
   render(){
      return(
         <div>
             <Header />
             <Frontpage />
             <Footer />
         </div>
      );
   }
}
export default App;