import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../../data.json"; // Assuming you have a data file with country data


export default function Details() {
  const { countryCode } = useParams();  // Get countryCode from URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Find the country based on the countryCode (alpha3Code)
  const country = Data.find((country) => country.alpha3Code === countryCode);

  // Handle the case where the country is not found
  if (!country) {
    return <div className="absolute top[50%]">Country not found</div>;
  }

  return (
    <>

    <div className="p-16">
     
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-5 mt-5"
        onClick={() => navigate(-1)} 
      >
        Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
      
      <div className="flex flex-col md:flex-row">
        <img 
          src={country.flags.png} 
          alt={`${country.name} flag`} 
          className="w-[300px] h-[200px] object-cover mb-4 md:mb-0 md:mr-10"
        />
        <div className="space-y-3">
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(", ")}</p>
          <p><strong>Currency:</strong> {country.currencies ? country.currencies[0].name : "N/A"}</p>
          <p><strong>Native Name: </strong>{country.nativeName}</p>
        </div>
      </div>
    </div>
    </>
  );
}
