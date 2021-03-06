import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';

const PageNotFound = () => {
    const pageName= "Page Not Found";
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <section>
                <Container>
                    <h2 className="section-header">The page you are looking for is not found!</h2>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;