import './assets/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar';
import ProductTable from './product-table';

class FilterableProductTable extends React.Component {

  constructor(props){
    super(props);
    this.state = { filterText:"",isStockOnly:false };
  }

  render() {

    //To compute filtered List via states and props in here.


    return (
      <div>
        <SearchBar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly}/>
        <ProductTable filterText={this.state.filterText}  isStockOnly={this.state.isStockOnly}  productList={this.props.productList}/>
      </div>
    );
  }
}

let data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

ReactDOM.render(
  <FilterableProductTable productList={data}/>,
   document.body.appendChild(document.createElement('div'))
);
