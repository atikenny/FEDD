import React, { PropTypes } from 'react';
import RemoveItem from '../containers/RemoveItem';
import Card from 'material-ui/Card';

const List = ({ items, onRemoveClick }) => (
    <div class="items">
        {items.map((item) => (
            <Card key={item.id}>
                <span>{item.text}</span>
                <RemoveItem itemId={item.id} />
            </Card>
        ))}
    </div>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

export default List;
