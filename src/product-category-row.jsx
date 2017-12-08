import './assets/css/product-table';
import React from 'react';

class ProductCategoryRow  extends React.Component {
  render() {
    return (
      <div className="product-catetogry-row">{this.props.category}</div>
    );
  }
}

export default ProductCategoryRow ;
