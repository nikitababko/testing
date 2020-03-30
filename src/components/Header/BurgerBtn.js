import React, { Component } from "react";

class BurgerBtn extends Component {
    state = {
        handleClick() {
            // burger
            const burger_btn = document.querySelector(".burger-btn");
            burger_btn.classList.toggle("burger-btn--active");
            // nav
            const nav = document.querySelector(".header__nav");
            nav.classList.toggle("header__nav--active");
        }
    };

    render() {
        return (
            <div className="burger-btn" onClick={this.state.handleClick}>
                <span className="burger-btn__menu"></span>
            </div>
        );
    }
}

export default BurgerBtn;
