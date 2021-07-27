import React, { Component } from 'react'
import consultant from "../Assets/consultants-1-1.png"
export default class HomeHero extends Component {
    render() {
        return (
            <section className="home_hero">
                <div className="container heightFull">
                    <img src={consultant} alt=""/>
                    <div className="row home_data heightFull">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <h1>Ekakshar<br/><strong className="colorPurple">Consultants</strong></h1>
                            <h2>Start, Simplify, Scale &amp; Succeed</h2>
                            <p>Finding the best business solutions within <br/>your budget to help you succeed</p>
                            <a className="ctaEkakshar connectWithTeamEk" href="/">Connect With Our Experts</a>
                            <a href="https://www.youtube.com/watch?v=pMRfzIbxoRk" className="watchDemoVid" data-lity=""><img src="https://ekakshar.co.in/wp-content/uploads/2020/06/play-button.svg" alt=""/>Watch Video</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
