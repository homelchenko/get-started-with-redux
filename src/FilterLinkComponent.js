import { connect } from 'react-redux';

import { setVisibilityFilter } from './actionCreators';
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