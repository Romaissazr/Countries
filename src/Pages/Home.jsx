import React, { useState } from "react";

import Data from "../../data.json";
import Card from "../Components/Card";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function HomePage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  // Handle region selection
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setDropdownVisible(false);
  };

  // Clear region filter
  const handleShowAllCountries = () => {
    setSelectedRegion("");
    setDropdownVisible(false);
  };

  // Update search query
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Filter countries based on region and search query
  const filteredData = Data.filter((country) => {
    const matchesRegion = selectedRegion
      ? country.region.toLowerCase() === selectedRegion.toLowerCase()
      : true;
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div>
  
      {/* Search and Filter */}
      <div className="px-16 py-5 flex justify-between">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            className="w-[500px] h-[50px] shadow-customlight rounded-md pl-16 dark:bg-DarkBlueEl dark:text-white"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <IoMdSearch className="absolute top-2 left-5 text-4xl text-DarkGray dark:text-white cursor-pointer" />
        </div>

        {/* Dropdown Filter */}
        <div className="font-medium relative">
          <div
            className="bg-white dark:bg-DarkBlueEl dark:text-white rounded-md w-[250px] shadow-customlight px-5 text-lg py-3 flex items-center justify-between cursor-pointer"
            onClick={toggleDropdown}
          >
            <p>{selectedRegion ? selectedRegion : "Filter by Region"}</p>
            <IoIosArrowDown />
          </div>
          {dropdownVisible && (
            <div className="absolute mt-2 bg-white dark:bg-DarkBlueEl dark:text-white rounded-md w-[250px] shadow-customlight px-5 text-lg py-3 flex flex-col gap-3">
              <p className="cursor-pointer" onClick={() => handleRegionSelect("Africa")}>Africa</p>
              <p className="cursor-pointer" onClick={() => handleRegionSelect("Americas")}>America</p>
              <p className="cursor-pointer" onClick={() => handleRegionSelect("Asia")}>Asia</p>
              <p className="cursor-pointer" onClick={() => handleRegionSelect("Europe")}>Europe</p>
              <p className="cursor-pointer" onClick={() => handleRegionSelect("Oceania")}>Oceania</p>
              <p className="cursor-pointer" onClick={handleShowAllCountries}>Show All Countries</p>
            </div>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-10 p-16">
        {filteredData.map((country, index) => (
          <Card
            key={index}
            name={country.name}
            capital={country.capital}
            region={country.region}
            population={country.population}
            flags={country.flags.png}
            countryCode={country.alpha3Code}
          />
        ))}
      </div>
    </div>
  );
}
