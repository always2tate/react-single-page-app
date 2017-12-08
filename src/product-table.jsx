import './assets/css/product-table';
import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';

class ProductTable extends React.Component {
  render() {

    let products = [];
    let curCategory = "";
    let _self = this;
    this.props.productList.forEach(function(product){
        //To compute filtered List via states and props in here.
      if (product.name.indexOf(_self.props.filterText) === -1 || (!product.stocked && _self.props.isStockOnly)) {
        return;
      }

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
