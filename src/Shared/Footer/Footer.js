import React from 'react';
import './Footer.css';
import { Box, Container, FormControl, Grid, Input, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <footer style={{ padding: '100px 0px 30px 0px', backgroundImage: 'linear-gradient(to right, var(--primaryColor) , var(--secondaryColor))', borderTopLeftRadius: '150px' }}>
            <Container>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box>
                            <h3 style={{ color: '#fff', fontSize: '26px' }} className='footer-logo'>CAM TECH</h3>
                            <p style={{ color: '#fff', fontSize: '16px', lineHeight: '1.4' }}>
                                Best camera shop in online. Buy top quality camera from camtech. We are best in the market in the term of keeping promises. We will deliver you the best product timely!
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box>
                            <h3 style={{ color: '#fff', fontSize: '26px' }}>
                                OFFICE
                            </h3>
                            <address style={{ fontSize: '16px', color: '#fff' }}>
                                ITPL Road<br />
                                Whitefield, New York<br />
                                USA
                            </address>
                            <p style={{ fontSize: '16px', color: '#fff', textDecoration: 'underline' }}>
                                camtech@camtech.com
                            </p>
                            <p style={{ fontSize: '16px', color: '#fff' }}>
                                +99808784653
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box>
                            <h3 style={{ color: '#fff', fontSize: '26px' }}>
                                LINKS
                            </h3>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Link className='footer-links' to='/'>Home</Link>
                                <Link className='footer-links' to='/explore'>Explore</Link>
                                <Link className='footer-links' to='/'>About</Link>
                                <Link className='footer-links' to='/'>Contact</Link>
                                <Link className='footer-links' to='/'>Review</Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box>
                            <h3 style={{ color: '#fff', fontSize: '26px' }}>
                                NEWS LETTER
                            </h3>
                            <Box>
                                <FormControl variant="standard">
                                    <Input
                                    sx={{color: '#fff'}}
                                    placeholder="Enter your email id"
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <EmailIcon sx={{color: '#fff'}} />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                            <Box className='footer-icon-box'>
                                    <Box className='footer-icon-container'><FacebookOutlinedIcon /></Box>
                                    <Box className='footer-icon-container'><TwitterIcon /></Box>
                                    <Box className='footer-icon-container'><WhatsAppIcon /></Box>
                                    <Box className='footer-icon-container'><PinterestIcon /></Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Box sx={{padding: '40px 0px' }}>
                        <Box sx={{ height: '2px', background: '#8f94a7' }}></Box>
                    </Box>
                    <Box>
                        <p style={{color: '#fff', textAlign: 'center'}}>Camtect Limited &copy; 2021 - All Rights Reserved.</p>
                    </Box>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;