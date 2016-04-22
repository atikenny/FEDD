import { connect } from 'react-redux';
import React from 'react';
import AddItem from './containers/AddItem';
import Header from './components/Header';
import List from './components/List';

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
        <Header />
        <div className="content-container">
            <div className="controls">
                <AddItem />
            </div>
            <VisibleItems />
        </div>
    </div>
);

export default FEDD;
