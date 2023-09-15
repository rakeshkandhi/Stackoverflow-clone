import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Asserts/logo.png';
import search from '../../Asserts/search.svg';
import Avatar from '../../Components/Avatar/Avatar';
import Button from '../../Components/Button/Button';
import './Navbar.css';

const Navbar = () => {
    var user = null;

    return (
        <nav>
            <div className='navBar'>
                <Link to='/' className='nav-item nav-btn'>
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
                    <img src={search} width={'18'} alt='' srcset='' />
                </form>
                {user === null ? (
                    <Link to='/' className='nav-item nav-btn'>
                        Log in
                    </Link>
                ) : (
                    <>
                        <Link to='/'>
                            <Avatar>M</Avatar>
                        </Link>
                        <Button>Log out</Button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
