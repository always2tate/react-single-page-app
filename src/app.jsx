import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

class FilterableProductTable extends React.Component {
  render() {
    let products = this.props.productList.map((item,index) =>
      <li key={index}>
        {item.name}
      </li>
    );
    return (
      <ul>{products}</ul>
    );
  }
}

var data = [
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
