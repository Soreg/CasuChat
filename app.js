import React, { Component } from 'react';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Frontpage from './components/single_pages/frontpage/frontpage';

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