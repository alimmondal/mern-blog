/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./hero.css";
import Card from "./Card";
import { hero } from "../../../../dummyData";

const Hero = () => {
  const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero1 overflow-hidden">
        <div className="container">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
