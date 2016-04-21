import React from 'react';
import Sticky from './Sticky';

const Header = () => (
    <Sticky className="header">
        <span className="menu-opener"><i className="material-icons">menu</i></span>
    </Sticky>
);

export default Header;