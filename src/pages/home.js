import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import ImgCarouselComponent from '../components/img-carousel';
import ProductComponent from '../components/product';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <ImgCarouselComponent></ImgCarouselComponent>
        <ProductComponent></ProductComponent>
        
      </div>
    );
  }
}

export default HomePage;