import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.scss'
import Menu from '../Menu/Menu';
const Header = () => {
    const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 45) {
        // Si on scroll vers le bas de plus de 50px, on cache la div
        setVisible(false);
      } else {
        // Sinon, on réaffiche la div
        setVisible(true);
      }
      setLastScrollTop(scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
    return (
        <div className='header display--flex'>
            <Link to='/home'><h1 className={visible ? 'visible' : 'hidden'}>PORTFOLIO</h1></Link>
            
            <Menu/>
        </div>
    );
};

export default Header;