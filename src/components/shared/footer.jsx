import React, { Component } from 'react';
import styled from 'styled-components';
import FooterBg from '../../img/footerBg.png';

const FooterWrapper = styled.div`
    background-image: url(${FooterBg});
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