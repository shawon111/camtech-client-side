import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import DashboardLink from './DashboardLinks/DashboardLink';
import './Dashboard.css';

const Dashboard = () => {
    const pageName = "Dashboard";
    const pages = [
        "My Orders", "Manage Products", "Add Product", "Manage Orders", "Add Review", "Make Admin", "Payment"
    ]
    const links = [
         "/myorders", "/manageproducts", "/addproduct", "/manageorders", "/addreview",
         "makeadmin", "/payment"
    ]
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <section style={{ paddingBottom: '80px' }}>
                <Container>
                    <div className="dashboard-container">
                        <h2 className="section-header">
                            Controll Your Account
                        </h2>
                        <div className="dashboard-links">
                            <DashboardLink
                            page={pages[0]}
                            link={links[0]}
                            ></DashboardLink>
                            <DashboardLink
                            page={pages[1]}
                            link={links[1]}
                            ></DashboardLink>
                            <DashboardLink
                            page={pages[2]}
                            link={links[2]}
                            ></DashboardLink>
                            <DashboardLink
                            page={pages[3]}
                            link={links[3]}
                            ></DashboardLink>
                            <DashboardLink
                            page={pages[4]}
                            link={links[4]}
                            ></DashboardLink>
                            <DashboardLink
                            page={pages[5]}
                            link={links[5]}
                            ></DashboardLink>
                            <DashboardLink
                            page={pages[6]}
                            link={links[6]}
                            ></DashboardLink>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;