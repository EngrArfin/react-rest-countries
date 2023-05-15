import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='menu'>
            <h1>Welcome to our Country</h1>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/countries">Countries</a>
            <a href="/us">Contract us</a>
        </div>
    );
};

export default Header;