import React, { Component } from 'react'

// Check the length of cartItems from the parent component
// Notify the user if their cart is empty or not with by using a condition statement

export default class Cart extends Component {
    render() {

        const {cartItems} = this.props;
        return (
            <div> {console.log("cart.js:11", cartItems)}
              {cartItems.length === 0? (
              <div className="cart cart-header">Cart is empty</div>
              ) : (
                <div className="cart cart-header">You have {cartItems.length} in the cart{" "}</div>
            )}  
            </div>
            // <div className="cart">
            //     <ul className="cart-items">

            //     </ul>
            // </div>
        )
    }
}
