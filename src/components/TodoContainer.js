/* TodoContainer.js */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    state = {
      todos: [],
    };
    handleChange = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    };
    delTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id;
          })
        ]
      });
    };
    addTodoItem = title => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };
    async componentDidMount() {
      const data = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 10
        }
      });
      const functionAdd = (data) => this.setState({ todos: data.data });
      functionAdd(data);
    }
    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList 
                  todos={this.state.todos} 
                  handleChangeProps={this.handleChange}
                  deleteTodoProps={this.delTodo} 
                />
            </div>
        )
    }
}


export default TodoContainer;