import React from 'react';
import { Container } from '@mui/material';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/UseFirebase';

const Header = () => {
    const {user, handleLogOut} = useFirebase();
    return (
        <header>
            <Container>
                <div className="nav-container">
                    <div className="logo">
                        <h1 style={{ color: '#fff' }} className="logo">Cam Tech</h1>
                    </div>
                    <div className="menu">
                        <Link className="menu-item" to="/">Home</Link>
                        <Link className="menu-item" to="/explore">Explore</Link>

                        {
                            user.email && <Link className="menu-item" to="/dashboard">Dashboard</Link>
                        }
                        <div style={{ display: 'inline-block', margin: '0', padding: '0' }} className="div">
                            {
                                user.email ? <button onClick={handleLogOut} style={{ border: '0', cursor: 'pointer' }} className="menu-item">Logout</button> :
                                    <Link className="menu-item" to="/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;