import React from "react";
import CountryCard from "./CountryCard";
import "../css/CountryList.css";

function CountryList({ countries, selectCountry, darkMode }) {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard
          country={country}
          selectCountry={selectCountry}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default CountryList;
