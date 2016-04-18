import { connect } from 'react-redux';
import React from 'react';
import AddItem from './containers/AddItem';
import { removeItem } from './actions';
import List from './components/List'

const getVisibleItems = (items) => {
    return items.filter(item => !item.removed);
};

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveClick(id) {
            dispatch(removeItem(id))
        }
    };
};

const VisibleItems = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

const FEDD = () => (
    <div>
        <header>
            <h1>FEDD welcome!</h1>
        </header>
        <div className="content-container">
            <AddItem />
            <VisibleItems />
        </div>
    </div>
);

export default FEDD;
