import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ProductComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-product">
                        <div className="product-f-image">
                            <img src={require('../images/product-1.jpg').default} alt="" style={{ 'width': "100%" }} />
                            <div className="product-hover">
                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                    cart
                                </a>
                                <NavLink to="/product/1"
                                    className="view-details-link">
                                    <i className="fa fa-link"></i>
                                    See details
                                </NavLink>

                            </div>
                        </div>

                        <h2><a href="single-product.html">Samsung S 10</a></h2>

                        <div className="product-carousel-price">
                            <ins>$700</ins> <del>$1000</del>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductComponent;