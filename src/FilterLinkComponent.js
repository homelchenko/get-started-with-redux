import { connect } from 'react-redux';

import Link from './linkComponent';

const stateToProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const dispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () =>
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
        })
    };
};

const FilterLinkContaner = connect(
    stateToProps,
    dispatchToProps
)(Link);

export default FilterLinkContaner;