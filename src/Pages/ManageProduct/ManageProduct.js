import { Container } from '@mui/material';
import React from 'react';
import useProducts from '../../hooks/UseProducts';
import DashboardMenu from '../../Shared/DashboardMenu/DashboardMenu';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import SingleProduct from '../../Shared/SingleProduct/SingleProduct';
import './ManageProducts.css'

const ManageProduct = () => {
    const pageName = "Manage Products";
    const { products } = useProducts();
    return (
        <div>
            <Header></Header>
            <PageBanner pageName={pageName}></PageBanner>
            <Container>
                <DashboardMenu></DashboardMenu>
            </Container>
            <section style={{ paddingBottom: '80px' }}>
                <Container>
                    <div className="manage-orders-page-container">
                        <h2 className="section-header">Manage All Products</h2>
                        <div className="all-products-container">
                            {
                                products.map(product => <SingleProduct
                                    product={product}
                                    key={product._id}
                                ></SingleProduct>)
                            }
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ManageProduct;