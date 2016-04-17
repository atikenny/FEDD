import React, { PropTypes } from 'react';

const List = ({ items }) => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default List;
