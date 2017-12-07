import './assets/css/product-table';
import React from 'react';
import ProductCategoryRow from './product-category-row';
class ProductTable extends React.Component {
  render() {
    return (
      <div className="product-table">
        <div className="product-table-header">
            <div className="product-title-price">名称</div>
            <div className="product-title-price">价格</div>
        </div>
        <ProductCategoryRow products={this.props.productList}/>
      </div>
    );
  }
}

export default ProductTable;
