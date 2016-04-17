import { connect } from 'react-redux';
import React from 'react';
import AddItem from './containers/AddItem';
import List from './components/List'

const mapStateToProps = (state) => {
    return {
        items: state.items
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
