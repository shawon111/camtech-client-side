import React from 'react';
import { Container } from '@mui/material';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container>
                <div className="nav-container">
                    <div className="logo">
                        <h1 style={{color: '#fff'}} className="logo">Cam Tech</h1>
                    </div>
                    <div className="menu">
                        <Link className="menu-item" to="/">Home</Link>
                        <Link className="menu-item" to="/explore">Explore</Link>
                        <Link className="menu-item" to="/login">Login</Link>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;