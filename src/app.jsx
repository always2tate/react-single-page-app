import './assets/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar';
import ProductTable from './product-table';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable productList={this.props.productList}/>
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
