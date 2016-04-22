import React            from 'react';
import { connect }      from 'react-redux';
import { removeItem }   from '../actions';
import RaisedButton     from 'material-ui/RaisedButton';

const RemoveItem = ({ removeItem }) => (
    <RaisedButton className="remove-button" onClick={removeItem}>Remove</RaisedButton>
);

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItem: () => {
            dispatch(removeItem(ownProps.itemId));
        }
    };
};

export default connect(null, mapDispatchToProps)(RemoveItem);
