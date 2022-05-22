import React from "react";
import offersImg from "../data/offers.json";

export const Offers = () => {
  return (
    <section ClassName="offers">
      <div ClassName="container">
        {offersImg.map((offer) => (
          <img ClassName="offer" src={offer} alt="" />
        ))}
      </div>
    </section>
  );
};
