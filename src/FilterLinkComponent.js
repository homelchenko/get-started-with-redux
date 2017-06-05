import React, { Component } from 'react';

import Link from './linkComponent';

import store from './store';

export default class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                })}
            >
                {props.children}
            </Link>
        );
    }
}