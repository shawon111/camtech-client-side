import { Alert, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/UseFirebase';
import { useHistory, useLocation } from 'react-router';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import UseAuth from '../../hooks/UseAuth';

const Registration = () => {
    const pageName = "Register";
    const [userName,setUserName] = useState('');
    const {setEmail, setPassword, handleCreateUser} = useFirebase();

    const {user} = UseAuth();
    //get input values
    const handleNameInput = e => {
        const name = e.target.value;
        setUserName(name);
    }
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
        handleCreateUser(userName);
        <Alert severity="success">This is a success alert — check it out!</Alert>
        e.preventDefault();
    }

    //redirect after registration
    const history = useHistory();
    if (user?.email) {
        history.replace('/login');
    }
    return (
        <div>
            <PageBanner pageName={pageName} />
            <section style={{ paddingBottom: '80px' }}>
                <Container>
                    <h2 className="section-header">Register to your account</h2>
                    <div style={{ padding: '40px 0px', display: 'flex', justifyContent: 'center' }} className="login-form-container">
                        <form style={{ width: '70%' }} onSubmit={handleFormSubmit}>
                            <div>
                                <TextField
                                    id="outlined-name-input"
                                    label="User Name"
                                    type="text"
                                    onBlur={handleNameInput}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                            </div>
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
                                <input className="brand-btn" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '70%' }}>
                            <h3 style={{ fontSize: '20px', margin: '0 20px 0 0', display: 'inline-block' }}>Already have an account?</h3>
                            <Link to="/login" style={{ fontSize: '20px', margin: '0', display: 'inline-block', color: 'var(--brandColor)', textDecoration: 'underline', fontWeight: '600' }}>Please login to your account</Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Registration;