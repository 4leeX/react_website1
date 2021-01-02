import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            className="footer-input" 
                            placeholder='Your Email'
                        />
                        <Button buttoStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h1>About Us</h1>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testemunials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h1>Contact Us</h1>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className='social-logo'>
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to='/'
                            target='_black'
                            aria-label='Facebook'
                         >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to='/'
                            target='_black'
                            aria-label='Instagram'
                         >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                            className="social-icon-link steam"
                            to='/'
                            target='_black'
                            aria-label='Steam'
                         >
                            <i className="fab fa-steam"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
