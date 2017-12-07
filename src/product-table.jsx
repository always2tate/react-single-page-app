import './assets/css/product-table';
import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';

class ProductTable extends React.Component {

  render() {

    let products = [];
    let curCategory = "";
    this.props.productList.forEach(function(product){
      if(curCategory !== product.category){
        products.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      products.push(<ProductRow product={product} key={product.name}/>);
      curCategory = product.category;
    });

    return (
      <div className="product-table">
        <div className="product-table-header">
            <div className="product-title-price">名称</div>
            <div className="product-title-price">价格</div>
        </div>
        {products}
      </div>
    );
  }
}

export default ProductTable;
