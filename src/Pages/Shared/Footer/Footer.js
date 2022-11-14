import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-secondary text-black">
            <div>
                {/* <img src={logo} alt="" /> */}
                <img src="https://www.freeiconspng.com/thumbs/doctor-logo/doctor-logo-png-photo-5.png" className='logo_size' alt="" />
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </div>
            {/* <div>
                <span className="footer-title">Services</span>
                <a href="/"className="link link-hover">Branding</a>
                <a href="/"className="link link-hover">service</a>
                <a href="/"className="link link-hover">Marketing</a>
                <a href="/"className="link link-hover">Advertisement</a>
            </div> */}
            <div>
                <span className="footer-title">Company</span>
                <a href="/"className="link link-hover">About us</a>
                <a href="/"className="link link-hover">Contact</a>
                <a href="/"className="link link-hover">Jobs</a>
                <a href="/"className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/"className="link link-hover">Terms of use</a>
                <a href="/"className="link link-hover">Privacy policy</a>
                <a href="/"className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;