import React, { useState, useEffect } from "react";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

// import data from '../../data.json'
import img1 from "../../Assets/img1.jpeg";
import img2 from "../../Assets/img2.jpeg";
import img3 from "../../Assets/img3.jpeg";
import img4 from "../../Assets/img4.jpeg";
import img5 from "../../Assets/img5.jpeg";
import img6 from "../../Assets/img6.jpeg";
import img7 from "../../Assets/img7.jpeg";
import img8 from "../../Assets/img8.jpeg";
import img9 from "../../Assets/img9.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";

const dataTravle = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$7000",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Ha Noi",
    location: "Viet Nam",
    grade: "CULTURAL RELAX",
    fees: "$2300",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$9000",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$8000",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations for in the world. This place is know for its luxurious stays and adventure activities",
  },
];

const Main = () => {
  //add scroll animation

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const [dataTravle ,setDataTravle] = useState(data);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {dataTravle.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imgaDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <BsClipboardCheck className="icon" />
                  </button>
                </div>

        





              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
