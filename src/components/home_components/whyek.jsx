import React, { Component } from 'react';

export default class Whyek extends Component {
    render() {
        return (
            <section className="whyEk">
                <div className="container">
                <h2 className="headingEkakshar text-center">Why Ekakshar?</h2>
                    <h3 className="text-center"><b>Economical. Reliable. Efficient. Scalable.</b>
                    <br/>At Ekakshar, we believe businesses should focus on what matters the most:</h3>
                    <div className="row flexBox">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 boyimage">
                            <img src="https://ekakshar.co.in/wp-content/uploads/2020/06/whyekakshar-boy.png" alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"margin-top":"20px"}}>
                            <ul className="flexBox">
                                <li>
                                    <p>How to accomplish more with less?</p>
                                </li>
                                <li>
                                    <p>What is the best way to move forward for your budget?</p>
                                </li>
                                <li>
                                    <p>How to transform the worst days of your business into days for driving smart sales?</p>
                                </li>
                                <li>
                                    <p>Who are your best customers? Where are they based? What is the best way to reach them out?</p>
                                </li>
                                <li>
                                    <p>How can you drive customer acquisition and retention on your terms?</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

