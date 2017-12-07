import React from 'react';
class ProductCategoryRow  extends React.Component {
  render() {
    let products = this.props.products.map((item,index) =>
      (<li key={index}>
        {item.name}
      </li>)
    );
    return (
      <ul>{products}</ul>
    );
  }
}

export default ProductCategoryRow ;
