import './assets/css/search-bar'
import React from 'react';
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="search" name=""/>
        </div>
        <div>
          <input type="checkbox" name="" value=""/>Only show products in stock!
        </div>
      </div>
    );
  }
}

export default SearchBar;
