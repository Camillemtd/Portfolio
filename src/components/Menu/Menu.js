import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Menu/menu.scss'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenuClick = () => {
        window.scrollTo(0, 0);
        setOpenMenu(false)
      };
    return openMenu ? (
        <>
            <figure className='menu__back'></figure>
            <figure className='fa-xmark-back'></figure>
            <i className="fa-solid fa-xmark"onClick={() => setOpenMenu(false)} ></i>
            <div  className='menu'>
                <nav className='menu__nav'>
                    <ul>
                        <li><NavLink to='/home' onClick={handleMenuClick}>HOME</NavLink></li>
                        <li><NavLink to='/project' onClick={handleMenuClick}>PROJECT</NavLink></li>
                        <li><NavLink to='/wip' onClick={handleMenuClick}>WIP</NavLink></li>
                        <li><NavLink to='/contact' onClick={handleMenuClick}>CONTACT</NavLink></li> 
                    </ul>
                </nav>
                
               
            </div>
        </>
        ) : (
        <>
            <figure className='fa-bars-back'></figure>
            <i className="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
        </>
         
    );
};

export default Menu;