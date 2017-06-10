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
                    store={store}
                    filter='SHOW_ALL'
                >
                    All
                </FilterLink>
                {' '}
                <FilterLink
                    store={store}
                    filter='SHOW_ACTIVE'
                >
                    Active
                </FilterLink>
                {' '}
                <FilterLink
                    store={store}
                    filter='SHOW_COMPLETED'
                >
                    Completed
                </FilterLink>
            </p>
        </div>
    );
}