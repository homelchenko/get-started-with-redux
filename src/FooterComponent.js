import React from 'react';

import FilterLink from './FilterLinkComponent';

export default ({
    store
}) => {
    return (
        <div>
            <p>
                Show:
                {' '}
                <FilterLink
                    filter='SHOW_ALL'
                >
                    All
                </FilterLink>
                {', '}
                <FilterLink
                    filter='SHOW_ACTIVE'
                >
                    Active
                </FilterLink>
                {', '}
                <FilterLink
                    filter='SHOW_COMPLETED'
                >
                    Completed
                </FilterLink>
            </p>
        </div>
    );
}