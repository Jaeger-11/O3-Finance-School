import BA from "../assets/partners/BA1.jpg";
import BEI from "../assets/partners/BEI.png";
import BNUG from "../assets/partners/BNUG.png";
import CAB from "../assets/partners/CAB.png";
import DC from "../assets/partners/DC1.png";
import HGO from "../assets/partners/healthGO.png";
import kaspa from "../assets/partners/kaspa.png";
import nft from "../assets/partners/NFT-FACTORY.png";
// import thata from "../assets/partners/thata.jpg";
// import web3nifty from "../assets/partners/web3nifty.jpg";
// import womeninDEFI from "../assets/partners/womeninDEFI.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partners = () => {
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
        arrows: false,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                  slidesToShow: 3,
                  infinite: true,
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                infinite: true,
              }
            },
        ]
      };
    return (
        <section id="partners" className="text-white font-[500] bg-[#001B6B] h-[54px] md:h-[7.5vw] md:text-xl partners font-jakarta text-xs">
          <div className="meet-partners flex flex-wrap w-max"> <p> Meet our &nbsp; </p><p className="font-semibold">PARTNERS</p></div>
          <Slider {...settings} className="partners-list">
            <img src={BA} />
            <img src={BEI} />
            <img src={BNUG} />
            <img src={CAB} />
            <img src={DC} />
            <img src={HGO} />
            <img src={kaspa} />
            <img src={nft} />
            <img src={'https://galobank.finance/wp-content/uploads/2021/09/B-LOGO-GALO-BLANCO.png'} />
            {/* <img src={thata} /> */}
            {/* <img src={web3nifty} /> */}
            {/* <img src={womeninDEFI} /> */}
        </Slider>
        </section>
    )
}

export default Partners