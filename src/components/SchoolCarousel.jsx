import React from "react";
import AKSU from "../assets/schools/AKSU.svg";
import OAU from "../assets/schools/OAU.svg";
import FUTMINNA from "../assets/schools/FUTMINNA.svg";
import UI from "../assets/schools/UI.png";
import UNIUYO from "../assets/schools/UNIUYO.svg";
import UNN from "../assets/schools/UNN.png";
import FUL from "../assets/schools/FUL.png";
import YABATECH from "../assets/schools/YABATECH.png";
import UNIZIK from "../assets/schools/UNIZIK.png";
import LASU from "../assets/schools/LASU.png";
// import KWARAPOLY from "../assets/schools/KWARAPOLY.png";
// import POLYIBADAN from "../assets/schools/POLYIBADAN.png";
// import OSU from "../assets/schools/OSU.png";

const SchoolsCarousel = () => {
    return (
        <div className="school-carousel">
            <img src={AKSU} alt="AKSU" />
            <img src={OAU} alt="OAU" />
            <img src={FUTMINNA} alt="FUTMINNA" />
            <img src={UI} alt="UI" />
            {/* <img src={UNN} alt="UNN" /> */}
            <img src={UNIUYO} alt="UNIUYO" />
            <img src={YABATECH} alt="YABATECH" />
            <img src={UNIZIK} alt="UNIZIK" />
            {/* <img src={LASU} alt="LASU" /> */}
            {/* <img src={FUL} alt="FUL" /> */}
            {/* <img src={KWARAPOLY} alt="KWARAPOLY" /> */}
            {/* <img src={POLYIBADAN} alt="POLYIBADAN" /> */}
            {/* <img src={OSU} alt="OSU" /> */}
        </div>
    )
}

export default SchoolsCarousel;