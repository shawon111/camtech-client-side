import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DashboardMenu from '../../Shared/DashboardMenu/DashboardMenu';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import MyOrderTable from '../MyOrders/MyOrderTable/MyOrderTable';
import OrderTable from './OrderTable/OrderTable';

const ManageOrders = () => {
    const pageName = "Manage Orders";

    //load all orders 
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://serene-beyond-56458.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        });
    },[]);
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <Container>
                <DashboardMenu></DashboardMenu>
            </Container>
            <section style={{paddingBottom: '80px'}}>
                <Container>
                    <div className="my-order-container">
                        <h2 className="section-header">Manage All Orders</h2>
                        <div className="my-order-list">
                            {
                                // orders.map(order => <OrderTable
                                //     key={order._id}
                                //     myOrder={order}
                                // ></OrderTable>)
                                orders.map(myOrder => <OrderTable
                                    key={myOrder._id}
                                    myOrder={myOrder}
                                    ></OrderTable>)
                            }
                        </div>
                    </div>
                </Container>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default ManageOrders;