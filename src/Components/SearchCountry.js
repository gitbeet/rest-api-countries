import React from "react";
import "../css/SearchCountry.css";
import { FaSearch } from "react-icons/fa";

export default function SearchCountry({
  searchQuery,
  region,
  handleSearchQuery,
  handleRegion,
  regionList,
  darkMode,
}) {
  return (
    <div className="search-country">
      <div
        className={`${
          darkMode
            ? "search-bar  color-white bg-dark box-shadow placeholder-white"
            : "search-bar box-shadow color-gray placeholder-gray"
        }`}
      >
        <FaSearch />
        <input
          className={`${darkMode ? "color-white bg-dark" : ""}`}
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <select
        className={`${
          darkMode ? "color-white bg-dark box-shadow" : "bg-light box-shadow"
        }`}
        value={region}
        onChange={(e) => handleRegion(e.target.value)}
      >
        {regionList.map((region) => (
          <option>{region}</option>
        ))}
      </select>
    </div>
  );
}
