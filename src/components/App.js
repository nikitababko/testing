import React, { Component } from "react";

// Components
import Header from "./Header/Header";
import SectionIntro from "./SectionIntro/SectionIntro";
import SectionFeatures from "./SectionFeatures";
import SectionWorks from "./SectionWorks";
import SectionOurTeam from "./SectionOurTeam";
import SectionTestimonials from "./SectionTestimonials/SectionTestimonials";
import SectionDownload from "./SectionDownload";
import Footer from "./Footer";

// Library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
import "../scss/index.scss";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SectionIntro />
                <SectionFeatures />
                <SectionWorks />
                <SectionOurTeam />
                <SectionTestimonials />
                <SectionDownload />
                <Footer />
            </div>
        );
    }
}

export default App;
