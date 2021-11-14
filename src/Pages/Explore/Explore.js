import { Container } from '@mui/material';
import React from 'react';
import useProducts from '../../hooks/UseProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import Product from '../../Shared/Product/Product';
import './Explore.css';

const Explore = () => {
    const pageName = "Explore";
    const {products} = useProducts();
    return (
        <div className="explore-page">
            <Header></Header>
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
            <Footer></Footer>
        </div>
    );
};
export default Explore;