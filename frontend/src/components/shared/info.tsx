import React from "react";
import Cards from "../specific/Cards";

const info = [
  {
    title: "Gauranted safety",
    imgUrl: "/icons/padlock.png",
    
    description:
      `"Beneath the starry canvas of the cosmos, 
      a cosmic ballet unfolds, where planets pirouette 
      and galaxies waltz in the vast expanse of eternity.
     In this celestial theater ."`,
  },
  {
    title: "Serving globally",
    imgUrl: "/icons/worldwide.png",
    description:
      `"Lost in the labyrinth of time, fragments of 
      memories scatter like autumn leaves in the wind, 
      carrying the essence of moments once lived. 
      The echoes."`,
  },
  {
    title: "Varifed Platform",
    imgUrl: "/icons/wallet.png",
    description:
      `"Amidst the symphony of life, where the rhythm 
      of existence beats in synchrony with the pulse of 
      the universe, individuals navigate their unique melodies. 
      From."`,
  },
];

const CardsInfo = () => {
  return (
    <div className="w-[90%] flex flex-col items-center mt-5 mx-auto py-3 mb-10">
      <div>
        <h1 className="text-[2.5rem] max-md:text-[1.7rem] font-semibold text-light text-center">
          We are the platform with the
          <br className="max-md:hidden" />
          Most complete feature
        </h1>
      </div>
      <div className="flex gap-10 max-md:gap-3 mx-auto flex-wrap items-center justify-center mt-8">
        {info.map((info, index) => (
          <Cards
            key={index}
            title={info.title}
            imgurl={info.imgUrl}
            description={info.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsInfo;
