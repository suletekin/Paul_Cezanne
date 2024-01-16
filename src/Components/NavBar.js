import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const Navbar = () => {
  return (
    <nav>
        <div className='layout'>

            <div className='title'><Link className='navItem' to="/">Pomme</Link></div>

            <div className='tabs'>
                <Link className='navItem' to="/">Work</Link>
                <Link className='navItem' to="/about">About</Link>
                <Link className='navItem' to="/contact">Contact</Link>
            </div>


        </div>
        
        
    </nav>
  );
}

export default Navbar;
