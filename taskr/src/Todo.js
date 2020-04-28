import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    };

    handleRemove() {
        this.props.removeTodo(this.props.id);
    };

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleToggle() {
        this.props.toggleTodo(this.props.id);
    };

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });

    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                < div >
                    <form htmlFor="task" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            id="task"
                            onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div >
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li onClick={this.handleToggle} className={this.props.completed ? 'completed' : ''} >
                        {this.props.task}
                    </li>
                </div>
            )
        }
        return result;
    }
}
