import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

let AddItem = ({ dispatch }) => (
    <button onClick={event => {
        dispatch(addItem('new item'));
    }}>Add Item</button>
);

AddItem = connect()(AddItem);

export default AddItem;