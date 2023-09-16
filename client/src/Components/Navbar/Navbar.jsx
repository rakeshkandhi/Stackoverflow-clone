import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Asserts/logo.png';
import search from '../../Asserts/search.svg';
import Avatar from '../../Components/Avatar/Avatar';
import './Navbar.css';

const Navbar = () => {
    var user = 123;

    return (
        <nav>
            <div className='navBar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} width={'100'} alt='Stack-Overflow' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>
                    About
                </Link>
                <Link to='/' className='nav-item nav-btn'>
                    Products
                </Link>
                <Link to='/' className='nav-item nav-btn'>
                    For Teams
                </Link>
                <form action=''>
                    <input type='text' placeholder='Enter your search' />
                    <img className='search-icon' src={search} width={'18'} alt='' srcset='' />
                </form>
                {user === null ? (
                    <Link to='/' className='nav-item nav-link'>
                        Log in
                    </Link>
                ) : (
                    <>
                        <Link to='/'>
                            <Avatar>M</Avatar>
                        </Link>
                        <button className='nav-item nav-link'>Log out</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
