import "../css/CountryCard.css";
import { Country } from "./App";
interface Props {
  country: Country;
  selectCountry: (val: any) => void;
  darkMode: boolean;
}

const CountryCard = ({
  country,
  selectCountry,
  darkMode,
}: Props): JSX.Element => {
  return (
    <div
      className={`${
        darkMode
          ? "country-card bg-dark color-light box-shadow"
          : "country-card bg-light box-shadow"
      }`}
    >
      <div>
        <img
          className="country-card-flag"
          onClick={() => selectCountry(country)}
          src={country.flags.png}
          alt="flag"
        />
      </div>
      <div className="country-card-text">
        <h1
          onClick={() => selectCountry(country)}
          className="country-card-name"
        >
          {country.name.common}
        </h1>
        <div className="information-field">
          <span className="text-bold">Population: </span>
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div className="information-field">
          <span className="text-bold">Region: </span>
          <span>{country.region}</span>
        </div>
        <div className="information-field">
          <span className="text-bold">Capital: </span>
          <span>{(country.capital && country.capital[0]) || ""}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
