import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.scss'
import Menu from '../Menu/Menu';
const Header = () => {
    
    return (
        <div className='header display--flex'>
            <Link to='/home'><h1>PORTFOLIO</h1></Link>
            
            <Menu/>
        </div>
    );
};

export default Header;