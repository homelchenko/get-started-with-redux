import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { toggleTodo } from './actionCreators';
import TodoList from './todoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(
                todo => todo.completed
            );
        case 'active':
            return todos.filter(
                todo => !todo.completed
            );
        default:
            throw new Error(`Unknown filter type (${filter})`);
    }
}

const mapStateToProps = (state, { match: { params }}) => ({
    todos: getVisibleTodos(
        state.todos,
        params.filter || 'all'
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList ;