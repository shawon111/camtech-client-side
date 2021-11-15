import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import Header from '../../Shared/Header/Header';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import Footer from '../../Shared/Footer/Footer';

const AddReview = () => {
    const pageName = "Add Review";
    const [reviewData, setReviewData] = useState({});

    //handle onblur
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }

    //handle form submit
    const handleAddReview = e => {
        fetch('https://serene-beyond-56458.herokuapp.com/addreview', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId.length > 0){
                alert('Review Added successfully!!!')
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
                    <div className="add-review-container">
                        <h2 className="section-header">
                            Add Your Review Here
                        </h2>
                        <div className="add-review-form-container">
                            <form onSubmit={handleAddReview}>
                                <TextField
                                    id="outlined-name-input"
                                    label="Your Name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-rating-input"
                                    label="Your Rating(betwen 1-5)"
                                    type="number"
                                    name="rating"
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <TextField
                                    id="outlined-feedback-input"
                                    label="Your Feedback"
                                    type="text"
                                    name="testimony"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    onBlur={handleOnBlur}
                                    style={{ width: '100%', marginBottom: '30px' }}
                                />
                                <button className="brand-btn">Add Review</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;