import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact us</h3>
                    <ul>
                        <li>Address: <br/> 123 Model Town, Chicago</li>
                        <li>Phone: <br/> 1234567</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;