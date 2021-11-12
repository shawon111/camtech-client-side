import React from 'react';
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { Container, TextField } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="social-icons">
                    <div className="social-btn"><FontAwesomeIcon icon={faFacebookF} /><span style={{ marginLeft: '5px' }}>Facebook</span></div>
                    <div className="social-btn"><FontAwesomeIcon icon={faTwitter} /><span style={{ marginLeft: '5px' }}>Twitter</span></div>
                    <div className="social-btn"><FontAwesomeIcon icon={faYoutube} /><span style={{ marginLeft: '5px' }}>Youtube</span></div>
                    <div className="social-btn"><FontAwesomeIcon icon={faGooglePlusG} /><span style={{ marginLeft: '5px' }}>Google +</span></div>
                    <div className="social-btn"><FontAwesomeIcon icon={faInstagram} /><span style={{ marginLeft: '5px' }}>Instagram</span></div>
                </div>
            </div>
            <div className="footer-bottom">
                <Container>
                    <div className="footer-bottom-container">
                        <div className="footer-cols">
                            <h4>Our Office</h4>
                            <address>
                                175 SW 7th St #2009,<br /> Miami, Fl 33130,<br />United States
                            </address>
                        </div>
                        <div className="footer-cols">
                            <h4>Contact Us</h4>
                            <address>
                                Phone: 01234567893<br />
                                Email: camtech@camtech.com
                            </address>
                        </div>
                        <div className="footer-cols">
                            <h4>News Letter</h4>
                            <form>
                                <input placeholder="Your Email" className="footer-email" type="email" /><button className="brand-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;