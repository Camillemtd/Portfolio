import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Menu/menu.scss'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    
    return openMenu ? (
        <>
            <figure className='menu__back'></figure>
            <figure className='fa-xmark-back'></figure>
            <i className="fa-solid fa-xmark"onClick={() => setOpenMenu(false)} ></i>
            <div  className='menu'>
                <nav className='menu__nav'>
                    <ul>
                        <li><NavLink to='/home' onClick={() => setOpenMenu(false)}>HOME</NavLink></li>
                        <li><NavLink to='/project' onClick={() => setOpenMenu(false)}>PROJECT</NavLink></li>
                        <li><NavLink to='/wip' onClick={() => setOpenMenu(false)}>WIP</NavLink></li>
                        <li><NavLink to='/contact' onClick={() => setOpenMenu(false)}>CONTACT</NavLink></li> 
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