import React, { Component } from "react";

class IntroModal extends Component {
    state = {
        closeModal() {
            const closeModal = document.querySelector(".introModal");
            closeModal.style.display = "none";
        }
    };
    render() {
        return (
            <div className="introModal">
                <div>Welcome</div>
                <div>My nickname - White Rabbit</div>
                <div className="close-modal" onClick={this.state.closeModal}>
                    Close
                </div>
            </div>
        );
    }
}

export default IntroModal;
