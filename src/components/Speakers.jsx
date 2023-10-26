import oswald from "../assets/speakers/oswald-speaker.jpg";
import ihenyen from "../assets/speakers/speaker-ihenyen.jpg";
import stanley from "../assets/speakers/speaker-stanley.jpg";
import eyitayo from "../assets/speakers/eyitayo.jpg";
import thelma from "../assets/speakers/thelma.jpg";
import divinegift from "../assets/speakers/Divinegift-Soetan.jpg";
import kue from "../assets/speakers/Kue-Barinor-Paul.jpg";
import odion from "../assets/speakers/Odion-Tobi.jpg";
import olabanji from "../assets/speakers/Olabanji-Samuel.jpg";
import oluseyiA from "../assets/speakers/Oluseyi-Akindeine.jpg";
import olarenwaju from "../assets/speakers/Oluseyi-Olarenwaju.jpg";
import oluwashina from "../assets/speakers/Oluwashina-Peter.jpg";
import richard from "../assets/speakers/Richard-Okunola.jpg";
// import salisu from "../assets/speakers/salisu.png";
import tobiloba from "../assets/speakers/Tobiloba-Idowu.jpg";
import tosin from "../assets/speakers/tosin.jpg";
import tunde from "../assets/speakers/tunde.jpg";
import yadheedhya from "../assets/speakers/Yadheedhya.jpg";
import jude from "../assets/speakers/Jude-Ozinegbe.jpg";
import omotuyi from "../assets/speakers/Omotuyi.jpg";
import jaime from "../assets/speakers/Jaime.jpg";
import olubunmi from "../assets/speakers/Olubunmi.jpg";
import { motion } from "framer-motion";

let speakers = [
    {
      name: "Oswald Osaretin",
      position: "MANAGING PARTNER, DigitA",
      profile: oswald
    },
    {
      name: "Senator Ihenyen",
      position: "LEAD PARTNER, INFUSION LAWYERS",
      profile: ihenyen
    },
    {
      name: "Golomo Stanley",
      position: "CO-FOUNDER/CEO OF FARMCHAIN FINANCE & ROTACASH",
      profile: stanley
    },
   {
      name: "Eyitayo Ogunmola",
      position: "FOUNDER/CEO, UTIVA",
      profile: eyitayo
    },
    {
      name: "Thelma Opurum",
      position: "CO-FOUNDER, CARNET & ECLIPSE HR",
      profile: thelma
    },
    {
      name: "Divinegift A. Soetan",
      position: "Founder & CEO, HealthGo Inc & Swyypepay",
      profile: divinegift
    },
    {
      name: "Kue Barinor Paul",
      position: "Founder & Lead Partner, Blocklex Consulting",
      profile: kue
    },
    {
      name: "Odion Tobi",
      position: "eclectic artist",
      profile: odion
    },
    {
      name: "Olabanji Samuel",
      position: "Co-founder & CEO, Enoverlab",
      profile: olabanji
    },
    {
      name: "Oluseyi Akindeine",
      position: "Founder, Hyperspace Technologies",
      profile: oluseyiA
    },
    {
      name: "Oluseyi Olarenwaju",
      position: "CFO Medallion Datacenter",
      profile: olarenwaju
    },{
      name: "Oluwashina Peter",
      position: "Founder of Gateway",
      profile: oluwashina
    },{
      name: "Richard Okunola",
      position: "",
      profile: richard
    },
    {
      name: "Dr. Salisu Uba",
      position: "Founder, NatQuest",
      // profile: salisu
    },
    {
      name: "Tobiloba Idowu",
      position: "Finance Analyst",
      profile: tobiloba
    },
    {
      name: "Oluwatosin Olaseinde",
      position: "Founder/CEO, Money Africa",
      profile: tosin
    },
    {
      name: "Fine boy Tunde",
      position: "",
      profile: tunde
    },
    {
      name: "Yadheedhya",
      position: "AI Engineer, Brain DAO",
      profile: yadheedhya
    },
    {
      name: "Jude Ozinegbe",
      position: "Founder, Cyberchain",
      profile: jude
    },
    {
      name: "Omotuyi Motolani",
      position: "Content lead &SMMWomenInDeFi",
      profile: omotuyi
    },
    {
      name: "Jaime Ruiperez",
      position: "Blockchain Head, GaloBank",
      profile: jaime
    },
    {
      name: "Olubunmi Fabanwo",
      position: "Blockchain Enthusiast",
      profile: olubunmi
    }
]

const Speakers = () => {
    return (
        <section className="speakers mt-4">
          {speakers.map((speaker) => {
            const {profile, name, position} = speaker
            return (
            <motion.div className="speaker" initial={{opacity:0, y:30}} 
            whileInView={{ opacity: 1, y:0}} 
            transition={{duration: 1, delay: 0.1, type: 'tween'}}
            >
              <img src={profile} alt="" />
              <div className="profile text-white font-jakarta text-center p-[2px]">
                <h4 className="capitalize text-base font-bold md:text-[1.6vw]">{name}</h4>
                <p className="uppercase text-[10px] md:text-[1vw]">{position}</p>
              </div>
            </motion.div>
            )
          })}
        </section>
    )
}

export default Speakers;