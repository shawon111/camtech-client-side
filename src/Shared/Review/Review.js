import { Paper, Rating } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {name, rating, testimony} = review;
    return (
        <Paper style={{padding: '20px', backgroundColor: 'var(--primaryColor)'}} elevation={3}>
            <h3 style={{margin: '0', fontSize: '26px', color: '#fff'}}>{name}</h3>
            <Rating name="read-only" value={rating} readOnly />
            <p style={{color: '#fff', fontSize: '18px'}}>{testimony}</p>
            
        </Paper>
    );
};

export default Review;