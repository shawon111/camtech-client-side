import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/UseProducts';
import Pros from '../Pros/Pros';
import './Home.css';
import shipping from '../../../images/icon-free.png';
import money from '../../../images/icon-money.png';
import discount from '../../../images/icon-discounts.png';
import support from '../../../images/icon-support.png';
import Product from '../../../Shared/Product/Product';
import Review from '../../../Shared/Review/Review';

const Home = () => {

    // advantage contents
    const prosHeadlines = [
        "FREE SHIPPING", "MONEY BACK", "DISCOUNTS", "SUPPORT"
    ];
    const prosDescription = [
        "Free shipping all around the country", "30 days money back guarranty ", "20% discount on best selling products", "24/7 dedicated customer support"
    ]
    const prosBg = [
        "#eb2f06", "#e55039"
    ]
    // importing products
    const { products } = useProducts();
    const bestProducts = products.slice(0, 6);
    // loading reviews
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://serene-beyond-56458.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            {/* homepage banner */}
            <section className="home-banner">
                <Container>
                    <div className="home-banner-container">
                        <div>
                            <h5 className="home-banner-subheading">-Buy camera online-</h5>
                            <h2 className="home-banner-heading">Best <span style={{ color: 'var(--brandColor)' }}>Selling</span> Cameras!</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}><Link to="/explore" style={{ fontSize: '25px', display: 'inline-block' }} className="primary-btn">Explore Now!</Link></div>
                        </div>
                    </div>
                </Container>
            </section>
            {/* advantages of cam tech */}
            <section className="camtech-pros">
                <Container>
                    <div className="all-pros">
                        <Pros img={shipping} bg={prosBg[0]} headline={prosHeadlines[0]} description={prosDescription[0]}></Pros>
                        <Pros img={money} bg={prosBg[1]} headline={prosHeadlines[1]} description={prosDescription[1]}></Pros>
                        <Pros img={discount} bg={prosBg[0]} headline={prosHeadlines[2]} description={prosDescription[2]}></Pros>
                        <Pros img={support} bg={prosBg[1]} headline={prosHeadlines[3]} description={prosDescription[3]}></Pros>
                    </div>
                </Container>
            </section>
            {/* trending products */}
            <section className="trending-products">
                <Container>
                    <h2 className="section-header">Trending & Popular Cameras</h2>
                    <div className="home-products-container">
                        {
                            bestProducts.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </Container>
            </section>
            {/* customer reviews */}
            <section className="customer-reviews">
                <Container>
                    <h2 className="section-header">Customer Reviews</h2>
                    <div className="customer-review-container">
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;