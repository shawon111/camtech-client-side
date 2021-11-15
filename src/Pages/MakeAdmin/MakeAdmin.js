import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const pageName = "Meke Admin";
    const [email, setEmail] = useState('');

    const handleOnBlur = (e) => {
        const adminEmail = e.target.value;
        setEmail(adminEmail);
    }

    //handle create admin
    const handleMakeAdmin = (e) => {
        const updatedUser = {isAdmin: true};
        fetch(`https://serene-beyond-56458.herokuapp.com/makeadmin/${email}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('Admin Created Successfully!!!');
                window.location.reload();
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <section style={{ paddingBottom: '80px' }}>
                <Container>
                    <div className="make-admin-container">
                        <h2 className="section-header">Create A new Admin</h2>
                        <div className="create-admin-form-container">
                            <form onSubmit={handleMakeAdmin}>
                                <TextField
                                    id="outlined-email-input"
                                    className="admin-email"
                                    label="Email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                />
                                <button className="brand-btn">make admin</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;