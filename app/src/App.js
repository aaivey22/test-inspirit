import React from 'react';
import data from "./data.json";
import Products from './components/Products';

//class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      options: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">INSPIRIT</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart</div>
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
