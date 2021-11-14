import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { Container } from '@mui/material';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import MyOrderTable from './MyOrderTable/MyOrderTable';
import UseAuth from '../../hooks/UseAuth';

const MyOrders = () => {
    const pageName = "My Orders";
    const {user} = UseAuth();

    //load my orders
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://serene-beyond-56458.herokuapp.com/myorders?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyOrders(data);
        });
    },[])

    
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <section style={{paddingBottom: '80px'}}>
                <Container>
                    <div className="my-order-container">
                        <h2 className="section-header">Manage My Orders</h2>
                        <div className="my-order-list">
                            {
                                myOrders.map(myOrder => <MyOrderTable
                                key={myOrder._id}
                                myOrder={myOrder}
                                ></MyOrderTable>)
                            }
                        </div>
                    </div>
                </Container>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default MyOrders;