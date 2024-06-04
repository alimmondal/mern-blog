/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import "./hero.css";
import Card from "./Card";
// import { hero } from "../../../../../dummyData copy";

const Hero = ({ items }) => {
  // const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero1 overflow-hidden">
        <div className="container">
          {items.slice(3, 7).map((item) => (
            <Card key={item?.source.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
