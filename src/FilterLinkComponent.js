import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

import Link from './linkComponent';

export default class FilterLink extends Component {
    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const { filter, children } = this.props;

        const state = store.getState();

        return (
            <Link
                active={filter === state.visibilityFilter}
                onClick={() =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                })}
            >
                {children}
            </Link>
        );
    }
}

FilterLink.contextTypes = {
    store: PropTypes.object
}