import React from 'react';
import Sticky from './Sticky';

const Header = () => (
    <Sticky>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#filter">Filter</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    </Sticky>
);

export default Header;