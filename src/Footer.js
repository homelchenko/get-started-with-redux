import React from 'react';

import FilterLink from './components/FilterLink';

export default ({
    store
}) => {
    return (
        <div>
            <p>
                Show:
                {' '}
                <FilterLink
                    filter='all'
                >
                    All
                </FilterLink>
                {', '}
                <FilterLink
                    filter='active'
                >
                    Active
                </FilterLink>
                {', '}
                <FilterLink
                    filter='completed'
                >
                    Completed
                </FilterLink>
            </p>
        </div>
    );
}