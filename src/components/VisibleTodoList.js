import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import TodoList from './TodoList';
import FetchErrorMessage from './FetchErrorMessage';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;

        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, isFetching, errorMessage, todos } = this.props;

        if (errorMessage) {
            return <FetchErrorMessage
                message={errorMessage}
            />
        }

        if (isFetching && !todos.length)
            return <p>Loading...</p>;

        return <TodoList
            todos={todos}
            onTodoClick={toggleTodo}
        />
    }
}

const mapStateToProps = (state, { match: { params }}) => {
    const filter = params.filter || 'all';

    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter
    };
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList ;