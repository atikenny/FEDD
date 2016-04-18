import React, { PropTypes } from 'react';
import RemoveItem from '../containers/RemoveItem';

const List = ({ items, onRemoveClick }) => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>
                <span>{item.text}</span>
                <RemoveItem
                    onClick={() => onRemoveClick(item.id)} />
            </li>
        ))}
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

export default List;
