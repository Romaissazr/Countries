import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, capital, region, population, flags, countryCode }) {
  return (
    <div className="bg-white dark:bg-DarkBlueEl dark:text-white shadow-customlight rounded-md cursor-pointer overflow-hidden">
      <Link to={`/details/${countryCode}`}>
      
        <img
          src={flags}
          alt={`${name} flag`}
          className="w-full h-[200px] object-cover"
        />

        {/* Country Details */}
        <div className="p-5">
          <h2 className="font-bold text-xl">{name}</h2>
          <p>
            <span className="font-semibold">Capital:</span> {capital}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p>
            <span className="font-semibold">Population:</span> {population.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
}
