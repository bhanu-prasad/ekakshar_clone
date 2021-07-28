import React, { Component } from 'react';
import logo from "../Assets/ganesha.png"
export default class Footer extends Component {
    render() {
        return (
            <section className="footer_body">
                    <div className="container">
                        <div className="row flexbox">
                            <div className="footerimg">
                                <a href="/">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <div class="footaddress">
                                <span>Address</span>
                                <p>204, Block 5, Suncity Apartments, <br/>Bellandur, Bengaluru- 560102</p>
                            </div>
                            <div class="footaddress">
                                <span>Contact Us</span>
                                <p>Number: <a href="tel:+91-8118031797">+91-8118031797</a></p>
                                <p>Email at: <a href="mailto:ekakshar.consultants@gmail.com">ekakshar.consultants@gmail.com</a></p>
                            </div>
                        </div>
                        <h6>© All Rights Reserved https://ekakshar.co.in</h6>
                    </div>
            </section>
        );
    }
}


