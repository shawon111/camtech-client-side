import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const SingleProduct = ({ product }) => {
    const { name, _id, img, price } = product;

    //handle delete product
    const handleDeleteProduct = (id) => {
        const url = `https://serene-beyond-56458.herokuapp.com/delete/product/${id}`;
        if (window.confirm("Are you sure want to delete this product?")) {
            fetch(url, {
                method: 'delete'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted Successfully!!!');
                        window.location.reload();
                    }
                })
        }

    }
    return (
        <Card sx={{}}>
            <CardMedia
                component="img"
                height="230"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <button onClick={() => handleDeleteProduct(_id)} className="brand-btn">Delete Product</button>
                    <span style={{ color: 'var(--primaryColor)', fontSize: '22px', fontWeight: '700' }}>${price}</span>
                </div>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;