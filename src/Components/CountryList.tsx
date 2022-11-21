import CountryCard from "./CountryCard";
import "../css/CountryList.css";
import { Country } from "./App";

interface Props {
  countries: Country[];
  selectCountry: (val: any) => void;
  darkMode: boolean;
}

const CountryList = ({
  countries,
  selectCountry,
  darkMode,
}: Props): JSX.Element => {
  return (
    <div className="country-list">
      {countries.map((country, index) => (
        <CountryCard
          key={index}
          country={country}
          selectCountry={selectCountry}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default CountryList;
