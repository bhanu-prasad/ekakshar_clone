import React, { Component } from 'react';
import Link from 'react-dom'
import logo from "../Assets/ganesha.png" 
class NavBar extends Component {
    render() {
        return (
            <section className="headerNav">
                <div className="container">
                    <div className="row navflex">
                        <div className="logo_nav">
                            <a href="/" ><img src={logo} alt="nav_logo" /></a>
                        </div>
                        <div className="nav_links">
                            <a href="/" className="link">Services</a>
                            <a href="/" className="link">About Us</a>
                            <a href="/" className="link">Blog</a>
                            <a href="/" className="contactus_nav">Contact Us</a>
                        </div>
                        <div className="hamburger">
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NavBar;
