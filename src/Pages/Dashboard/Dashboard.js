import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import DashboardLink from './DashboardLinks/DashboardLink';
import './Dashboard.css';
import UseAuth from '../../hooks/UseAuth';

const Dashboard = () => {
    const pageName = "Dashboard";
    const { user } = UseAuth();
    const [adminStatus, setAdminStatus] = useState(false);
    const pages = [
        "My Orders", "Manage Products", "Add Product", "Manage Orders", "Add Review", "Make Admin", "Payment"
    ]
    const links = [
        "/myorders", "/manageproducts", "/addproduct", "/manageorders", "/addreview",
        "makeadmin", "/payment"
    ]

    //check admin status
    useEffect(() => {
        const url = `https://serene-beyond-56458.herokuapp.com/users/${user?.email}`;
        fetch(url, {
            method: 'get'
        }).then(res => res.json())
            .then(data => setAdminStatus(data?.isAdmin))

    }, [user]);

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
                            {
                             !adminStatus &&  <>
                                <DashboardLink
                                    page={pages[0]}
                                    link={links[0]}
                                ></DashboardLink>
                                <DashboardLink
                                    page={pages[4]}
                                    link={links[4]}
                                ></DashboardLink>
                                <DashboardLink
                                    page={pages[6]}
                                    link={links[6]}
                                ></DashboardLink>
                            </>
                            }
                            {
                                adminStatus && <>
                                    <DashboardLink
                                        page={pages[3]}
                                        link={links[3]}
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
                                        page={pages[5]}
                                        link={links[5]}
                                    ></DashboardLink>
                                </>
                            }
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;