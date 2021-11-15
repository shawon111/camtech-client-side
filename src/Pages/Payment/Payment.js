import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';

const Payment = () => {
    const pageName = "Payment";
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <section>
                <Container>
                    <div>
                        <h2 className="section-header">Payment system coming soon.
                        </h2>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Payment;