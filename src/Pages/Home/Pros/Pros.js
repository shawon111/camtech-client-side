import { Box, margin } from '@mui/system';
import React from 'react';
import './Pros.css';

const Pros = (props) => {
    const {description, headline, img, bg} = props;
    return (
        <Box style={{backgroundColor: `${bg}`}} className="pros-box">
            <div className="pros-container">
                <div className="icon">
                    <img style={{width: '100%'}} src={img} alt="" />
                </div>
                <div className="texts">
                    <h5 style={{color: '#fff', fontSize: '20px', margin: '0 0 0 10px', fontWeight: '400'}}>{headline}</h5>
                    <p style={{margin: '10px 0 0 10px', color: '#fff'}}>{description}</p>
                </div>
            </div>
        </Box>
    );
};

export default Pros;