import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } />
         <span>{ this.props.description }</span>
         <button
            onClick={() => this.props.deleteTodo(this.props.index)}
         >delete</button>
       </li>
    );
  }
}

export default ToDo;
