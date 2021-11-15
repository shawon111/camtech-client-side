import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import './AddProduct.css';

const AddProduct = () => {
    const pageName = "Add Product";
    const [productData, setProductData] = useState({});

    //handle onBlur
    
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newProductData = {...productData};
            newProductData[field] = value;
            setProductData(newProductData); 
    }

    //add product in database
    const handleAddProduct = (e) =>{
        fetch('https://serene-beyond-56458.herokuapp.com/addproduct', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId.length > 0){
                alert('Product Added successfully!!!')
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
                    <div className="add-product-container">
                        <h2 className="section-header">Add A New Product</h2>
                        <div className="add-product-form-container">
                            <form onSubmit={handleAddProduct}>
                                <TextField
                                    id="outlined-product-name-input"
                                    label="Product Name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-product-price-input"
                                    label="Product Price"
                                    type="text"
                                    name="price"
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-product-name-input"
                                    label="Product Image Link"
                                    type="text"
                                    name="img"
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                 <TextField
                                    id="outlined-product-name-input"
                                    label="Product Description"
                                    type="text"
                                    onBlur={handleOnBlur}
                                    name="description"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <button className="brand-btn">Add Product</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;