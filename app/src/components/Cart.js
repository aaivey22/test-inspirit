import React, { Component } from 'react'
import formatCurrency from '../utils';

// Check the length of cartItems from the parent component
// Notify the user if their cart is empty or not with by using a condition statement
// Each cartItem is mapped and their key is set to a jsx li item for ui/css purposes

export default class Cart extends Component {
    render() {

        const { cartItems } = this.props;
        return (
            <div> {console.log("cart.js:11", cartItems)}
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                        <div className="cart cart-header">You have {cartItems.length} in the cart{" "}</div>
                    )}
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}></img>
                                </div>
                                <div>{item.title}</div>
                                <div className="right">
                                    {formatCurrency(item.price)} x {item.count}{" "}
                                    <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }
}
