import React, { Component } from "react";
// import SimpleSlider from "./SimpleSlider";
import Slider from "react-slick";

class SectionTestimonials extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <section id="testimonials" className="section-testimonials">
                <Slider {...settings}>
                    <div>
                        <div className="container-testimonials">
                            <div className="testimonials__avatar">
                                <img src="img/section-testimonials/testimonial-1.jpg" />
                            </div>
                            <div className="testimonials__description">
                                <p>
                                    <q>
                                        “Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec
                                        sed odio dui. Aenean eu leo quam...”
                                    </q>
                                </p>
                                <cite>Susan Sims, Interaction designer at xyz</cite>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container-testimonials">
                            <div className="testimonials__avatar">
                                <img src="img/section-testimonials/testimonial-2.jpg" />
                            </div>
                            <div className="testimonials__description">
                                <p>
                                    <q>
                                        “Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec
                                        sed odio dui. Aenean eu leo quam...”
                                    </q>
                                </p>
                                <cite>Susan Sims, Interaction designer at xyz</cite>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default SectionTestimonials;
