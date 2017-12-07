import './assets/css/product-table';
import React from 'react';
class ProductRow extends React.Component {
  render() {
    return (
      <div className="product-row">
        <div className="product-row-name-price">{this.props.product.name}</div>
        <div className="product-row-name-price">{this.props.product.price}</div>
      </div>
    );
  }
}

export default ProductRow ;
