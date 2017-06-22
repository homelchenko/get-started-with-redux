import { connect } from 'react-redux';

import { setVisibilityFilter } from './actionCreators';
import Link from './linkComponent';

const stateToProps = (
    state,
    ownProps
) => ({
    active: ownProps.filter === state.visibilityFilter
});

const dispatchToProps = (
    dispatch,
    ownProps
) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLinkContaner = connect(
    stateToProps,
    dispatchToProps
)(Link);

export default FilterLinkContaner;