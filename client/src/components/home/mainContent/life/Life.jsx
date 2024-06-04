// import React from "react";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";

import "../Ppost/ppost.css";
// import { lifestyle } from "../../../../../../dummyData copy";
import { FaCalendarDay } from "react-icons/fa";
import { lifestyle } from "../../../../../dummyData";
//copy ppost code
const Life = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="popularPost life">
        <Heading title="Life Style" />
        <div className="content">
          <Slider {...settings}>
            {lifestyle.map((val) => {
              return (
                <div key={val?.id} className="items">
                  <div className="box shadow">
                    <div className="images">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="category category1">
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className="text">
                      <h1 className="title">{val.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <FaCalendarDay size={24} />
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Life;
