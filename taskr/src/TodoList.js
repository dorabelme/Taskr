import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    };


    create(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    };

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    };

    render() {
        const todos = this.state.todos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            task={todo.task}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion} />);

        return (
            < div className="TodoList" >
                <h1>Taskr<span>A Simple React Todo List App</span></h1>
                <ul>{todos}</ul>
                < NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}
