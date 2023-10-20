import React from "react";
import AKSU from "../assets/schools/AKSU.svg";
import OAU from "../assets/schools/OAU.svg";
import FUTMINNA from "../assets/schools/FUTMINNA.svg";
import UI from "../assets/schools/UI.png";
import UNIUYO from "../assets/schools/UNIUYO.svg";
import UNN from "../assets/schools/unn.jpeg";
import FUL from "../assets/schools/ful.jpeg";
import YABATECH from "../assets/schools/yabatech.jpeg";
import UNIZIK from "../assets/schools/unizik.jpeg";
import LASU from "../assets/schools/lasu.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KWARAPOLY from "../assets/schools/kwarapoly.jpeg";
import POLYIBADAN from "../assets/schools/polyibadan.jpeg";
import OSU from "../assets/schools/osu.jpeg";

const SchoolsCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4.5,
                infinite: true,
              }
            },
        ]
      };
    return (
        <Slider {...settings} className="school-carousel">
            <img src={AKSU} alt="AKSU" />
            <img src={OAU} alt="OAU" />
            <img src={FUTMINNA} alt="FUTMINNA" />
            <img src={UI} alt="UI" />
            <img src={UNN} alt="UNN" />
            <img src={UNIUYO} alt="UNIUYO" />
            <img src={YABATECH} alt="YABATECH" />
            <img src={UNIZIK} alt="UNIZIK" />
            <img src={LASU} alt="LASU" />
            <img src={FUL} alt="FUL" />
            <img src={KWARAPOLY} alt="KWARAPOLY" />
            <img src={POLYIBADAN} alt="POLYIBADAN" />
            <img src={OSU} alt="OSU" />
        </Slider>
    )
}

export default SchoolsCarousel;