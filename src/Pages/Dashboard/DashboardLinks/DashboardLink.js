import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardLink.css';

const DashboardLink = (props) => {
    const {page, link} = props;
    return (
        <Box id="dashboard-links" style={{background: 'linear-gradient(165deg, var(--brandColor), var(--orangeColor))', height: '60px', display:'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px'}} className="pros-box">
            <div className="pros-container">
                <div className="texts">
                    <Link style={{color: '#fff', fontSize: '20px', textAlign: 'center', textDecoration: 'none', display: 'block', width: '100%'}} to={link}>{page}</Link>
                </div>
            </div>
        </Box>
    );
};

export default DashboardLink;