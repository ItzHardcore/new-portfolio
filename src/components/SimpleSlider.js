import React from "react";
import about from "../Assets/about.jpg";
import about3 from "../Assets/about3.jpg";
import about4 from "../Assets/about4.jpg";
import about5 from "../Assets/about5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        draggable: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={about} alt="about" className="img-fluid myAvtar3" />
            </div>

            <div>
                <img src={about3} alt="about3" className="img-fluid myAvtar3" />
            </div>
            <div>
                <img src={about4} alt="about4" className="img-fluid myAvtar3" />
            </div>
            <div>
                <img src={about5} alt="about5" className="img-fluid myAvtar3" />
            </div>
        </Slider>
    );
}

export default SimpleSlider;
