import './assets/css/search-bar'
import React from 'react';
class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
  }

  handleFilterTextChange(event){

  }

  handleStockChange(event){

  }

  render() {
    return (
      <div>
        <div>
          <input type="search" name="" value={this.props.filterText} onChange={this.handleFilterTextChange}/>
          </div>
        <div>
          <input type="checkbox" name="" checked={this.props.isStockOnly} onChange={this.handleStockChange}/>Only show products in stock!
        </div>
      </div>
    );
  }
}

export default SearchBar;
