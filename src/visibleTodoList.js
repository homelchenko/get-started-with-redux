import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { toggleTodo } from './actionCreators';
import TodoList from './todoList';
import { getVisibleTodos } from './reducers';

const mapStateToProps = (state, { match: { params }}) => ({
    todos: getVisibleTodos(
        state,
        params.filter || 'all'
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList ;