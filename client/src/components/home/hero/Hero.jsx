/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import "./hero.css";
import Card from "./Card";

const Hero = ({ items }) => {
  // const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero1 overflow-hidden">
        <div className="container">
          {items.slice(0, 4).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
