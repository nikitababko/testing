import React, { Component } from "react";

import IntroModal from "./IntroModal";

class SectionIntro extends Component {
    state = {
        openModal() {
            const openModal = document.querySelector(".introModal");
            openModal.classList.add("introModal--animation");

            const closeModal = document.querySelector(".introModal");
            closeModal.style.display = "block";
        }
    };
    render() {
        return (
            <section id="intro" className="section-intro">
                <div className="container">
                    <div className="section-intro__content">
                        <h1 className="section-intro__title">Your Favorite One Page Multi Purpose Template</h1>
                        <h2 className="section-intro__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.</h2>
                        <button onClick={this.state.openModal} className="section-intro__btn">
                            Find out more
                        </button>
                    </div>

                    {/* Modal window */}
                    <IntroModal />
                </div>
            </section>
        );
    }
}

export default SectionIntro;
