import React, { Component } from 'react';
import formatCurrency from '../utils';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
// Set addToCart event handler (the parent component App.js is responsible for handling this event)
// Pass the current product as a param by using an => func and passing product in ()
// openModal func accepts product as a param and sets the product in the current state with the value of the clicked product 

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = (product) => {
        this.setState({ product:null });
    };


    render() {
        const { product } = this.state;
        return (
            <div>
               <ul className="products">
                   {this.props.products.map((product) => (
                       <li key={product._id}>
                           <div className="product">
                               <a href={"#" + product._id}
                                onClick={() => this.openModal(product)}>
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
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <div>Modal</div>
                        </Zoom>
                        <button classname="close-modal" onClick={this.closeModal}>
                            X
                        </button>
                    </Modal>
                )}
            </div>
        );
    }
}
