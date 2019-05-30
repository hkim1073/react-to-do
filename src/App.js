import React, {Component} from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component{
constructor(props) {
  super(props);
  this.state = {
    todos: [
      {description: 'Walk the cat', isCompleted: true },
      { description: 'Throw the dishes away', isCompleted: false },
      { description: 'Buy new dishes', isCompleted: false },
      { description: 'Buy new dishes again', isCompleted: false }
    ]
  };
  this.deleteTodo = this.deleteTodo.bind(this)
}

deleteTodo(todoIndex) {
  const todos = this.state.todos.filter((todo, index) => index !== todoIndex);

  this.setState({
    todos,
  })
}

render(){
  return (
    <div className="App">
     <ul>
     {
       this.state.todos.map((todo, index) => {
         return (
           <ToDo
             key={ index }
             description={ todo.description }
             isCompleted={ todo.isCompleted }
             deleteTodo={this.deleteTodo}
             index={index}
           />
         )
       })
     }
     </ul>
    </div>
  );
}
}
export default App;
