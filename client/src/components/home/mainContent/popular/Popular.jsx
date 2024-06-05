/* eslint-disable no-unused-vars */
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
import { Link } from "react-router-dom";

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
            {popular.map((val, index) => {
              return (
                <div key={index} className="items ">
                  <Link to={`/post/${val?.slug}`}>
                    <div className="box shadow dark:border dark:rounded-sm dark:border-green-500">
                      <div className="images row ">
                        <div className="img">
                          <img src={val.image} alt="" />
                        </div>
                        <div className="category category1">
                          <span>{val?.category}</span>
                        </div>
                      </div>
                      <div className="text row dark:text-slate-300 dark:bg-slate-600">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                        <div className="date flex gap-3">
                          <FaCalendarDay size={24} />
                          <label className="dark:text-slate-300">
                            {new Date(val.updatedAt).toLocaleDateString()}
                          </label>
                        </div>
                        <div className="comment">
                          <FaComment size={24} />
                          <label className="dark:text-slate-300">
                            {val?.comment || "comment"}
                          </label>
                        </div>
                      </div>
                    </div>
                  </Link>
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
