import "../css/SearchCountry.css";
import { FaSearch } from "react-icons/fa";
import DropDownMenu from "./DropDownMenu";

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
            ? "search-bar  box-shadow color-white bg-dark placeholder-white"
            : "search-bar box-shadow color-gray bg-white  placeholder-gray"
        }`}
      >
        <FaSearch className="search-bar-search-icon" />
        <input
          className={`${darkMode ? "color-white bg-dark" : ""}`}
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder="Look up a country..."
        />
      </div>
      <DropDownMenu
        darkMode={darkMode}
        handleRegion={handleRegion}
        regionList={regionList}
        region={region}
      />
    </div>
  );
};

export default SearchCountry;
