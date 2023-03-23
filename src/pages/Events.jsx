import Navbar from "../components/Navbar";
import summit from "../assets/o3financesummit.jpg";
import arrow from "../assets/arrowright.svg";
import spacevents from "../assets/spaceevents.png";
import geetech from "../assets/geetech.png";
import ninja from "../assets/ninja.png";

const Events  = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <Navbar />
                <div className="font-alternate">
                    <img src={summit} alt="O3 Finance Summit" className="w-full md:hidden"/>
                    <article className="text-black p-4 md:p-0">
                        <h1 className="font-bold text-3xl">BLOCKCHAIN <span className="text-[#FFDA2A]">&</span> WEB3 : </h1>
                        <h4 className="font-bold text-md my-2">A TOOL FOR WEALTH CREATION</h4>

                        <p className="text-sm">A financial empowerment program that unveils the massive and transformation potentials of Blockchain and Web3.
    Aim to equip participants with practical knowledge of Blockchain Technology and how to utilize it for wealth creation
                        </p>

                        <button className="flex gap-2 justify-center items-center py-2 px-4 rounded-md mt-4 bg-[#FFDA2A]"> Get Ticket <img src={arrow} alt="arrow right" /> </button>
                    </article>
                    <section className="p-4 flex md:p-0">
                        <article>
                            <h3 className="font-semibold text-sm md:text-md">Partners</h3>
                            <div className="flex gap-4 items-center">
                                <img src={spacevents} className="" alt="spaceevents" />
                                <img src={geetech} className="" alt="geetech" />
                            </div>
                        </article>
                        <article>
                            <h3 className="font-semibold text-sm md:text-md">Sponsors</h3>
                            <div className="">
                                <img src={ninja} alt="ninja" />
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Events;