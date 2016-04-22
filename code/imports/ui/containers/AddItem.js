import React        from 'react';
import { connect }  from 'react-redux';
import { addItem }  from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

const AddItem = ({ addItem }) => (
    <RaisedButton primary={true} onClick={addItem}>Add Item</RaisedButton>
);

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => {
            dispatch(addItem('new item'));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddItem);
