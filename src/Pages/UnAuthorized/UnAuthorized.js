import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';

const UnAuthorized = () => {
    const pageName = "Unauthorized";
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <section>
                <Container>
                    <h2 className="section-header">You don't have permission to see the page</h2>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default UnAuthorized;