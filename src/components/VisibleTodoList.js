import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api/';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filtter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        fetchTodos(this.props.filter).then(todos =>
            console.log(this.props.filter, todos)
        );
    }

    render() {
        return <TodoList {...this.props} />
    }
}

const mapStateToProps = (state, { match: { params }}) => {
    const filter = params.filter || 'all';

    return {
        todos: getVisibleTodos(state, filter),
        filter
    };
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(VisibleTodoList));

export default VisibleTodoList ;