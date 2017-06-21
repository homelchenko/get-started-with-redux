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

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

const dispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () =>
            dispatch(
                setVisibilityFilter(ownProps.filter)
            )
    };
};

const FilterLinkContaner = connect(
    stateToProps,
    dispatchToProps
)(Link);

export default FilterLinkContaner;