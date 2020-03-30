import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class SectionOurTeam extends Component {
    render() {
        return (
            <section id="ourteam" className="section-our-team">
                <div className="container container--our-team">
                    <div className="section-our-team__person">
                        <img src="img/section-our-team/team-1.jpg" className="person-photo" />
                        <div className="person-content">
                            <h3 className="person-content__name">Ruth Woods</h3>
                            <h4 className="person-content__role">Founder, CEO</h4>
                            <p className="person-content__text">
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit
                                sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>
                            <div className="person-content__social" target="_blank">
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
                    </div>
                    <div className="section-our-team__person">
                        <img src="img/section-our-team/team-2.jpg" className="person-photo" />
                        <div className="person-content">
                            <h3 className="person-content__name">Timothy Reed</h3>
                            <h4 className="person-content__role">Co-Founder, Developer</h4>
                            <p className="person-content__text">
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit
                                sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>
                            <div className="person-content__social" target="_blank">
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
                    </div>
                    <div className="section-our-team__person">
                        <img src="img/section-our-team/team-3.jpg" className="person-photo" />
                        <div className="person-content">
                            <h3 className="person-content__name">Victoria Valdez</h3>
                            <h4 className="person-content__role">UI Designer</h4>
                            <p className="person-content__text">
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit
                                sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>
                            <div className="person-content__social" target="_blank">
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
                    </div>
                    <div className="section-our-team__person">
                        <img src="img/section-our-team/team-4.jpg" className="person-photo" />
                        <div className="person-content">
                            <h3 className="person-content__name">Beverly Little</h3>
                            <h4 className="person-content__role">Data Scientist</h4>
                            <p className="person-content__text">
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit
                                sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
                            </p>
                            <div className="person-content__social" target="_blank">
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
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionOurTeam;
