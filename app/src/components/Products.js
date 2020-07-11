import React, { Component } from 'react';
import formatCurrency from '../utils';


// Set addToCart event handler (the parent component App.js is responsible for handling this event)
// Pass the current product as a paramter by using an => func and passing product in ()

export default class Products extends Component {

    render() {
        return (
            <div>
               <ul className="products">
                   {this.props.products.map((product) => (
                       <li key={product._id}>
                           <div className="product">
                               <a href={"#" + product._id}>
                                   <img src={product.image} alt={product.title}></img>
                                   <p>{product.title}</p>
                               </a>
                               <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button onClick={() => this.props.addToCart(product)}className="button primary">Add To Cart</button>
                               </div>
                           </div>
                       </li>
                   ))}
                </ul> 
            </div>
        );
    }
}
