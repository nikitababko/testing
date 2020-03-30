import React, { Component } from "react";

class SectionFeatures extends Component {
    render() {
        return (
            <section id="features" className="section-features">
                <div className="container">
                    <div className="section-features__content">
                        {/* <section-features__content-row-top> */}
                        <div className="section-features__content-row ">
                            <div className="section-features__item">
                                <img src="img/section-features/features-one.png" className="features__item-icon" />
                                <h3 className="features__item-title">Easily customised</h3>
                                <p className="features__item-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                </p>
                            </div>
                            <div className="section-features__item">
                                <img src="img/section-features/features-two.png" className="features__item-icon" />
                                <h3 className="features__item-title">Responsive Ready</h3>
                                <p className="features__item-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                </p>
                            </div>
                            <div className="section-features__item">
                                <img src="img/section-features/features-three.png" className="features__item-icon" />
                                <h3 className="features__item-title">Modern Design</h3>
                                <p className="features__item-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                </p>
                            </div>
                        </div>
                        {/* <section-features__content-row-top/> */}

                        {/* <section-features__content-row-bot> */}
                        <div className="section-features__content-row">
                            <div className="section-features__item">
                                <img src="img/section-features/features-four.png" className="features__item-icon" />
                                <h3 className="features__item-title">Clean Code</h3>
                                <p className="features__item-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                </p>
                            </div>
                            <div className="section-features__item">
                                <img src="img/section-features/features-five.png" className="features__item-icon" />
                                <h3 className="features__item-title">Ready to Ship</h3>
                                <p className="features__item-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                </p>
                            </div>
                            <div className="section-features__item">
                                <img src="img/section-features/features-six.png" className="features__item-icon" />
                                <h3 className="features__item-title">Download for Free</h3>
                                <p className="features__item-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                </p>
                            </div>
                        </div>
                        {/* <section-features__content-row-bot/> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionFeatures;
