import React, { Component } from 'react';

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      wishlist: [],
    };
  }

  componentDidMount() {
    // Retrieve the wishlist from local storage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    this.setState({ wishlist });
  }

  render() {
    const { wishlist } = this.state;

    return (
      <div>
        <h1>Wishlist</h1>
        <div className="liked-products">
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <ul>
              {wishlist.map((product, index) => (
                <li key={index}>
                  <img src={product.image} alt={product.name} />
                  <span>
                    {product.name} - ${product.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Wishlist;
