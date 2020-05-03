import React,{Component} from 'react';
import './App.css';
import TodoItem from './components/Todoitem.js';
import todoData from './dummydata/todoData.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData,
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo)=>{
          if(todo.id === id ){
            todo.completed = !todo.completed
          }
          return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItem = this.state.todos.map(item =>
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />) 

    return (
      <div className="todo-list">
        {todoItem}
      </div>
    )
  }
}
export default App;
