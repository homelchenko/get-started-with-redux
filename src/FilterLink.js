import React from 'react';

import store from './store';

const FilterLink = ({
    filter,
    currentFilter,
    children,
    onClick
}) => {
    if (currentFilter === filter)
        return <span>{children}</span>;

    return (
        <a href='#'
            onClick={e => {
                e.preventDefault();
                onClick();
            }}>
            { children }
        </a>
    );
};

export default FilterLink;