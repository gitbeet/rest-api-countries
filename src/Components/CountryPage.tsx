import "../css/CountryPage.css";
import { BiArrowBack } from "react-icons/bi";
import { Country } from "./App";

interface Props {
  country: string;
  selectCountry: (val: string | null) => void;
  countries: Country[] | null;
  darkMode: boolean;
  goToCountry: (val: string | null) => void;
}

const CountryPage = ({
  country,
  selectCountry,
  countries,
  darkMode,
  goToCountry,
}: Props): JSX.Element => {
  const selectedCountry: Country | null =
    countries?.find?.((cou: Country) => cou?.name?.common === country) || null;
  console.log(country);
  if (!selectedCountry || !countries) return <h1>loading</h1>;

  const { flags, name, region, subregion, tld, currencies, languages } =
    selectedCountry;

  const nativeName = Object.values(Object.values(name)[2])[0]["official"];
  return (
    <div
      className={`${darkMode ? "country-page color-light" : "country-page"}`}
    >
      <div>
        <button
          className={`${
            darkMode
              ? "go-back-button color-light bg-dark box-shadow"
              : "go-back-button bg-light box-shadow"
          }`}
          onClick={() => selectCountry(null)}
        >
          <BiArrowBack /> Go back
        </button>
        <img className="country-page-flag box-shadow" src={flags.png} alt="" />
      </div>
      <div className="country-page-text">
        <h1 className="country-page-name">{name.common}</h1>
        <div className="country-page-details">
          <div className="country-text-top">
            <p>
              <span className="text-bold">Native name: </span>
              <span>{nativeName}</span>
            </p>
            <p>
              <span className="text-bold">Population: </span>
              <span>{selectedCountry?.population.toLocaleString()}</span>
            </p>
            <p>
              <span className="text-bold">Region: </span>
              <span>{region}</span>
            </p>
            <p>
              <span className="text-bold">Subregion: </span>
              <span>{subregion}</span>
            </p>
            <p>
              <span className="text-bold">Capital: </span>
              <span>
                {(selectedCountry?.capital && selectedCountry?.capital[0]) ||
                  "Not available"}
              </span>
            </p>
          </div>
          <div className="country-text-mid">
            <p>
              <span className="text-bold">Top level domain: </span>
              <span>{(tld && tld[0]) || "Not available"}</span>
            </p>
            <p>
              <span className="text-bold">
                {Object.entries(currencies).length > 1
                  ? "Currencies: "
                  : "Currency: "}
              </span>
              <span>
                {Object.entries(currencies).map((entry) => {
                  return entry[1].name;
                })}
              </span>
            </p>
            <p>
              <span className="text-bold">
                {Object.entries(languages).length > 1
                  ? "Languages: "
                  : "Language: "}
              </span>
              <span>
                {Object.entries(languages).map((entry, index) => {
                  return index === Object.entries(languages).length - 1 ? (
                    <span key={index}>{` ${entry[1]}`}</span>
                  ) : (
                    <span key={index}>{`${entry[1]}, `}</span>
                  );
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="border-countries-wrapper">
          <p className="text-bold">Border Countries</p>
          <div className="border-countries">
            {selectedCountry?.borders &&
              selectedCountry?.borders.map((border, index) => {
                const countryToGoTo =
                  countries?.find?.(
                    (country) =>
                      country?.fifa === border ||
                      country?.cca3 === border ||
                      country?.cioc === border
                  )?.name?.common || null;
                return (
                  <button
                    key={index}
                    onClick={() => goToCountry(countryToGoTo)}
                    className={`${
                      darkMode
                        ? "color-light bg-dark box-shadow"
                        : "bg-light box-shadow"
                    }`}
                  >
                    {
                      countries.find(
                        (country) =>
                          country.fifa === border ||
                          country.cca3 === border ||
                          country.cioc === border
                      )?.name.common
                    }
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
