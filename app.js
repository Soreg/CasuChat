import React, { Component } from 'react';
import Header from './src/components/shared/Header';
import Footer from './src/components/shared/Footer';
import Frontpage from './src/components/single_pages/frontpage/Frontpage';
import Base from './src/components/shared/base';
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