import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { description, name, price, img } = props.product;
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
                <Typography variant="body2" color="text.secondary">
                    {
                        description.slice(0, 120)
                    }...
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <Button className="primary-btn" style={{ color: '#fff' }} size="medium">Buy Now</Button>
                    <span style={{color: 'var(--primaryColor)', fontSize: '22px', fontWeight: '700'}}>${price}</span>
                </div>
            </CardActions>
        </Card>
    );
};

export default Product;