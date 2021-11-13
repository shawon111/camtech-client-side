import React from 'react';
import './Login.css';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import { Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/UseFirebase';
import UseAuth from '../../hooks/UseAuth';

const Login = () => {
    const pageName = "Login";
    const { user, setEmail, setPassword, handleUserLogin } = UseAuth();
    console.log(user);
    const handleEmailInput = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePasswordInput = e => {
        const pass = e.target.value;
        setPassword(pass);
    }

    //handle form submit
    const handleFormSubmit = (e) => {
        handleUserLogin();
        e.preventDefault();
    }
    //redirect after login
    const location = useLocation();
    const history = useHistory();

    if (user?.email) {
        const previousLocation = location?.state?.from;
        const previousLocationUrl = previousLocation?.pathname;
        const url = previousLocationUrl || "/dashboard";
        history.replace(url);
    }

    return (
        <div>
            <PageBanner pageName={pageName} />
            <section style={{ paddingBottom: '80px' }}>
                <Container>
                    <h2 className="section-header">Login to your account</h2>
                    <div style={{ padding: '40px 0px', display: 'flex', justifyContent: 'center' }} className="login-form-container">
                        <form style={{ width: '70%' }} onSubmit={handleFormSubmit}>
                            <div>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    onBlur={handleEmailInput}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    onBlur={handlePasswordInput}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                            </div>
                            <div>
                                <input className="brand-btn" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '70%' }}>
                            <h3 style={{ fontSize: '20px', margin: '0 20px 0 0', display: 'inline-block' }}>Don't have an account?</h3>
                            <Link to="/register" style={{ fontSize: '20px', margin: '0', display: 'inline-block', color: 'var(--brandColor)', textDecoration: 'underline', fontWeight: '600' }}>Create a new account</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Login;