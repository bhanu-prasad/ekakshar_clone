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
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NavBar;
