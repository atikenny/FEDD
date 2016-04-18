import React, { PropTypes } from 'react';

const Sticky = ({ children }) => {
    return (
        <div className="sticky">{children}</div>
    );
};

Sticky.propTypes = {
    children: PropTypes.node.isRequired
};

export default Sticky;