import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-image: url('/src/img/footerBg.png');
    height: 60px;
    width: 100%;
`;

class Footer extends Component{
   render(){
      return(
          <FooterWrapper>

          </FooterWrapper>
      );
   }
}

export default Footer;