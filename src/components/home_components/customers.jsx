import React, { Component } from 'react'

const testimonial_data = [
    {   
        id:1,
        desc:"I experienced a smooth and seamless transaction with Ekakshar consultants on restructuring my digital marketing strategy and they are very persistent and attentive always.",
        name:"Rizal",
        position:"Chief Exceutive Officer, Nuccar",
        country:"Malaysia"
    },
    {   
        id:2,
        desc:"Ekakshar is a customer-obsessed, ingenious, and dedicated team of individuals. They are always trying to go above and beyond to ensure the best customer experience. They function as a part of your team and not consultants.",
        name:"Chandhrashekar Singh",
        position:"MD & Founder, Shivansh Travels",
        country:"India"
    },
    {   
        id:3,
        desc:"Budget friendly, easily scalable solutions! I worked with the team online without meeting them in person and provided a service better than many managers who I used to meet daily!",
        name:"Faisal Mustafa",
        position:"Founder & CEO, USE CLICKS",
        country:"Kuwait"
    },
    {   
        id:4,
        desc:"The quality of your work is the best. I am very happy with Ekakshar’s work. The entire team is very cooperative and helpful!",
        name:"Sandeep Vishwakarma",
        position:"Founder &CEO, Getrelax Digital Private Limited",
        country:"India"
    },
    {   
        id:5,
        desc:"It’s been a very positive and professional experience with the Ekakshar team, as they connected and understood our processes quickly. Their domain knowledge is adding great value to our entrepreneurial ecosystem. Highly recommend their services as results will be exceptional.",
        name:"Olagunju Daniel",
        position:"CEO, IPlus Technologies",
        country:"Nigeria"
    }
    
]

const Testimonial = (props) => {
    return (
        <div className="owl-item">
            <div className="carouselitem">
                <p>{props.desc}</p>
                <b>{props.name}</b>
                <strong>{props.position}</strong>
                <i>{props.country}</i>
            </div>
        </div>
    );
}




export default class Customers extends Component {
    render() {
        return (
            <section className="customers text-center">
                <div className="container">
                    <div className="row">
                        <h2 class="headingEkakshar">Our customers review</h2>
                    </div>
                    <div>
                         
                    </div>
                </div>
            </section>
        )
    }
}
