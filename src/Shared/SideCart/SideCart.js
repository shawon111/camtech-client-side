import { Badge, Box } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const SideCart = () => {
    
    return (
        <>
            <Box sx={{
                background: '#3c40c6',
                lineHeight: '70px',
                textAlign: 'center',
                position: 'fixed',
                display: 'inline-block',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                border: '2px solid #3C40C6',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px 4px #3c40c66b'
            }} 
            width={70} 
            height={70}
            className="side-cart-icon"
            >
                <Link style={{width: '100%', display: 'inline-block'}} to="/">
                <Badge badgeContent={4} color="primary">
                    <AddShoppingCartIcon sx={{color: '#fff', fontSize: '27px'}} />
                </Badge>
                </Link>
            </Box>
        </>
    );
};

export default SideCart;