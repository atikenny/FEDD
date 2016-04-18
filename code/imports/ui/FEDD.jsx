import { connect } from 'react-redux';
import React from 'react';
import AddItem from './containers/AddItem';
import List from './components/List'

const getVisibleItems = (items) => {
    return items.filter(item => !item.removed);
};

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items)
    };
};

const VisibleItems = connect(mapStateToProps)(List);

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
