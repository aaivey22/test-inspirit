import React from 'react';
import data from "./data.json";
import Products from './components/Products';
import Cart from './components/Cart';

// Class component
// Set cart items to a new state and an empty [], so the cart is empty by default

// addToCart func with a paramter of (product)
  // Duplicate the instance of cartItems and slice
  // forEach method is used to check if the item being added to the cart is already present,
  // If statement used to verify this by product._id and then update the "count" of that item in the cart
  // If the item is not in the cart, it will be pushed into the cartItems []
  // The spread operator is used to add a new instance of the item
  // Define addToCart as a property
  // Fill cart items

// removeFromCart creates an instance of cart items and filters them based on ._id vs product._id
  // The user's selection is then set to a new cart item in the state
  // It is then set as a property to the cart

// Localstorage is used to make data persistent when adding/deleting from cart
  // Because cartItems is a JS obj, it must be made into a string with stringify for storage
  // The filter is passed in the JSON obj to check for the item's existence

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      options: "",
    };
  }

  createOrder = (order) => {
    alert("Need to save order for" + order.name);
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems", 
      JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">INSPIRIT</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}></Products>
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
      </main>
        <footer>
          All Rights Reserved
      </footer>
      </div>
    );
  }
}
export default App;
