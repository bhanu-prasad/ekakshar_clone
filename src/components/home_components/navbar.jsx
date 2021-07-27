import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Link from 'react-dom'
import logo from "../Assets/ganesha.png" 
import $ from 'jquery'

class NavBar extends Component {
    
    listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

    // menue toggle
    handleToggle = () => {
        const ham = findDOMNode(this.refs.ham_men);
        const nvlst = findDOMNode(this.refs.navlist)
        $(ham).toggleClass('open');
        $(nvlst).toggleClass('open')
        };

    render() {
        return (
            <section className={`headerNav ${this.state.nav && 'nav_fixed'}`} >
                <div className="container">
                    <div className="row navflex">
                        <div className="logo_nav">
                            <a href="/" ><img src={logo} alt="nav_logo" /></a>
                        </div>
                        <div className="nav_links" ref="navlist">
                            <a href="/" className={`link ${this.state.nav && 'link_fix'}`}>Services</a>
                            <a href="/" className={`link ${this.state.nav && 'link_fix'}`}>About Us</a>
                            <a href="/" className={`link ${this.state.nav && 'link_fix'}`}>Blog</a>
                            <a href="/" className="contactus_nav">Contact Us</a>
                        </div>
                        <div className="hamburger" onClick={this.handleToggle} ref="ham_men">
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
