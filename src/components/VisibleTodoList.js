import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
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
        const { filter, receiveTodos } = this.props;

        fetchTodos(filter).then(todos =>
            receiveTodos(filter, todos)
        );
    }

    render() {
        const { toggleTodo, ...rest } = this.props;

        return <TodoList
            onTodoClick={toggleTodo}
            {...rest}
        />
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
    actions
)(VisibleTodoList));

export default VisibleTodoList ;