import { connect } from 'react-redux';

import { toggleTodo } from './actionCreators';
import TodoList from './todoListComponent';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                todo => todo.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                todo => !todo.completed
            );
        default:
            throw new Error(`Unknown filter type (${filter})`);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick : id => {
            dispatch(
                toggleTodo(id)
            )
        }
    }
}

const VisibleTodoListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoListComponent ;