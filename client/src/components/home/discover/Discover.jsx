import React from "react";
// import { discover } from "../../../../../../dummyData copy";

import Heading from "../../common/heading/Heading";
import "./style.css";
import { discover } from "../../../../../dummyData copy";

const Discover = () => {
  return (
    <>
      <section className="discover">
        <div className="container">
          <Heading title="Discover" />
          <div className="content">
            {discover.map((val, index) => {
              return (
                <div key={index} className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <h1 className="title">{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
