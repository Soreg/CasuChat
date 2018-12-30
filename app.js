import React, { Component } from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Frontpage from './components/single_pages/frontpage/Frontpage';

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