import { Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import './Purchase.css';

const Purchase = () => {
    const pageName = "Purchase Product";
    const { id } = useParams();
    const { user } = UseAuth();

    const [camera, setCamera] = useState({});
    const { name, description, img, price } = camera;

    //load the product from database
    useEffect(() => {
        fetch(`https://serene-beyond-56458.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setCamera(data))
    }, []);

    //creating a order information object
    const [orderData, setOrderData] = useState({});
    const [ownerName, setOwnerName] = useState(user?.displayName);
    const [ownerEmail, setOwnerEmail] = useState(user?.email);
    const productId = id;
    const handleNameChange = e =>{
        const updatedName = e.target.value;
        setOwnerName(updatedName);
    }
    const handleEmailChange = e =>{
        const updatedEmail = e.target.value;
        setOwnerEmail(updatedEmail);
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = {...orderData};
        newOrderData[field] = value;
        setOrderData(newOrderData);
    }

    //handle on submit
    const handleOnSubmit = e => {
        const orderInfo = {...orderData, ownerEmail, ownerName, productId};
        const postUrl = `https://serene-beyond-56458.herokuapp.com/orders/neworder`;
        fetch(postUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId.length > 0){
                alert('order placed successfully')
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <PageBanner pageName={pageName}></PageBanner>
            {/* product info section */}
            <section style={{ padding: '80px 0px' }} className="productInfo">
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="product-info-cintainer">
                        <div style={{ width: '50%', padding: '0px 30px' }} className="product-img">
                            <img style={{ width: '100%' }} src={img} alt="product-img" />
                        </div>
                        <div style={{ width: '50%', padding: '0px 30px' }} className="product-details">
                            <h3 className="product-title">{name}</h3>
                            <h4 className="product-price">Price: ${price}</h4>
                            <p className="product-description"><span style={{ fontWeight: '700' }}> Product Description: </span>{description}</p>
                        </div>
                    </div>
                </Container>
            </section>
            {/* order product section */}
            <section style={{ backgroundColor: '#f7f7f7', padding: '80px 0px' }}>
                <Container>
                    <div className="order-product-container">
                        <h2 style={{ margin: '0' }} className="section-header">Place Order</h2>
                        <div className="checkout-form">
                            <form onSubmit={handleOnSubmit}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    onChange={handleNameChange}
                                    defaultValue={user?.displayName}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    onBlur={handleEmailChange}
                                    defaultValue={user.email}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-email-input"
                                    label="Phone Number"
                                    type="tel"
                                    name="number"
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-email-input"
                                    label="Order Notes"
                                    name="orderNote"
                                    onBlur={handleOnBlur}
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <input className="brand-btn" type="submit" value="CheckOut" />
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Purchase;