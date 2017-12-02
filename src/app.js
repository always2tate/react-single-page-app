import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>FaceBook</li>
          <li>WeChat</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ShoppingList name="Mark" />,
   document.body.appendChild(document.createElement('div'))
);
