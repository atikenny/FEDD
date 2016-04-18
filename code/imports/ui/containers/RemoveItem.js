import React from 'react';
import { connect } from 'react-redux';

let RemoveItem = ({ dispatch, onClick }) => (
    <button onClick={onClick}>Remove Item</button>
);

RemoveItem = connect()(RemoveItem);

export default RemoveItem;