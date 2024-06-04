/* eslint-disable react/prop-types */
import React from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../common/heading/Heading";
// import { popular } from "../../../../../../dummyData copy";
import { FaCalendarDay } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const Popular = ({ popular }) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {popular.map((val) => {
              return (
                <div key={val?.source.id} className="items">
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <img src={val.urlToImage} alt="" />
                      </div>
                      <div className="category category1">
                        <span>{val?.source?.name}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">{val.title.slice(0, 40)}...</h1>
                      <div className="date flex gap-3">
                        <FaCalendarDay size={24} />
                        <label>{val.publishedAt}</label>
                      </div>
                      <div className="comment">
                        <FaComment size={24} />
                        <label>{val?.source?.id}</label>
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

export default Popular;
