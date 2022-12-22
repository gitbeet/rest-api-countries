import "../css/SearchCountry.css";
import { FaSearch, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface Props {
  searchQuery: string;
  region: string;
  handleSearchQuery: (val: string) => void;
  handleRegion: (val: string) => void;
  regionList: string[];
  darkMode: boolean;
}

const SearchCountry = ({
  searchQuery,
  region,
  handleSearchQuery,
  handleRegion,
  regionList,
  darkMode,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      <div className="select-region-container">
        <div
          className={` ${
            darkMode ? "color-light" : "color-super-dark "
          } select-region-chevron`}
        >
          {isOpen ? (
            <FaChevronUp className="select-region-icon" />
          ) : (
            <FaChevronDown className="select-region-icon" />
          )}
        </div>
        <select
          onClick={() => setIsOpen((prev) => !prev)}
          onBlur={() => setIsOpen(false)}
          className={`${
            darkMode
              ? "color-white bg-dark box-shadow "
              : "bg-light box-shadow "
          } select-region`}
          value={region}
          onChange={(e) => handleRegion(e.target.value)}
        >
          {regionList.map((region, index) => (
            <option key={index}>{region}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchCountry;
