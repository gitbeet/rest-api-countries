import "../css/SearchCountry.css";
import { FaSearch } from "react-icons/fa";

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
        {regionList.map((region, index) => (
          <option key={index}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchCountry;
