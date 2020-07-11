import React, { Component } from 'react'
import formatCurrency from '../utils';

// Check the length of cartItems from the parent component
// Notify the user if their cart is empty or not with by using a condition statement
// Each cartItem is mapped and their key is set to a jsx li item for ui/css purposes

// Total is displayed with the reduce function by summing the accumulator
    // and the quotient of the current item price by the current item count. Default value is set to 0.
    //conditional rendering is used to hide/display the proceed button

export default class Cart extends Component {
    render() {

        const { cartItems } = this.props;
        return (
            <div> {console.log("cart.js:11", cartItems)}
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Your cart is empty</div>
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
                {cartItems.length!==0 && (
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                )}
                            </div>
                            <button className="button primary">Proceed</button>
                        </div>
                    </div>
                )}
            </div>
        )
    };
};
