import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({ task: "" });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({ task: "" });

    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    };

    render() {
        return (
            <form className="NewTodoForm" htmlFor="task" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    id="task"
                    placeholder="New Todo"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        )
    }
}
