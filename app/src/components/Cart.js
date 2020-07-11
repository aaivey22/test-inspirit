import React, { Component } from 'react'
import formatCurrency from '../utils';

// Check the length of cartItems from the parent component
// Notify the user if their cart is empty or not with by using a condition statement
// Each cartItem is mapped and their key is set to a jsx li item for ui/css purposes

// Total is displayed with the reduce function by summing the accumulator
    // and the quotient of the current item price by the current item count. Default value is set to 0.
    //conditional rendering is used to hide/display the proceed button

// Constructor(props) by default will not show the checkout form unless the proceed button is clicked
// handleInput func updates the component state by accessing the input box name and it's value

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name:"",
            email:"",
            address:"",
            showCheckout: false }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    };

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
                    <div>
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                )}
                            </div>
                            <button onClick={() => {
                                this.setState({showCheckout: true});
                                }}className="button primary">Proceed</button>
                        </div>
                    </div>
                    {this.state.showCheckout && (
                      <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text" required onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <button className="button primary" type="submit">
                                        Checkout
                                    </button> 
                                </li>
                            </ul>
                        </form>
                        </div>
                    )}
                    </div>
                )}
            </div>
        )
    };
};
