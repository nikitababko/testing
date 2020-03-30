import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__location">
                            <h3>Location</h3>
                            <address className="footer__location-address">
                                3481 Melrose Place Beverly Hills, CA 90210
                            </address>
                        </div>
                        <div className="footer__share">
                            <h3>Share with love</h3>
                            <div className="footer__share-social" target="_blank">
                                <a href="https://www.facebook.com/">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faFacebookF} />
                                </a>
                                <a href="https://twitter.com/?lang=ru" target="_blank">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faTwitter} />
                                </a>
                                <a href="https://ru.linkedin.com/" target="_blank">
                                    <FontAwesomeIcon className="font-awesome-icon" icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                        <div className="footer__about">
                            <h3>About ActiveBox</h3>
                            <p>
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper
                                nulla non metus auctor fringilla.
                            </p>
                        </div>
                    </div>
                    <div className="footer__rights">
                        <p>
                            Copyright © 2015 ActiveBox. All Rights Reserved Made with <i class="fas fa-heart"></i>{" "}
                            <span>by Kamal Chaneman</span>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
