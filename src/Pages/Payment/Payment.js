import { Container } from '@mui/material';
import React from 'react';
import DashboardMenu from '../../Shared/DashboardMenu/DashboardMenu';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';

const Payment = () => {
    const pageName = "Payment";
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <Container>
                <DashboardMenu></DashboardMenu>
            </Container>
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