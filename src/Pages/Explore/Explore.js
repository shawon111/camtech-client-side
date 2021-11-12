import { Container } from '@mui/material';
import React from 'react';
import useProducts from '../../hooks/UseProducts';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import Product from '../../Shared/Product/Product';
import './Explore.css';

const Explore = () => {
    const pageName = "Explore";
    const {products} = useProducts();
    return (
        <div className="explore-page">
            <PageBanner pageName={pageName}></PageBanner>
            <section className="camera-collection">
                <Container>
                    <h1 className="section-header">Best Camera Collection</h1>
                    <div className="all-products">
                        {
                            products.map(product=> <Product
                            key={product._id}
                            product={product}
                            ></Product>)
                        }
                    </div>
                </Container>
            </section>
        </div>
    );
};
export default Explore;