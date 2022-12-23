import "../css/CountryPage.css";
import { BiArrowBack } from "react-icons/bi";
import { Country } from "./App";
import Button from "./Button";
import CountryInfoField from "./CountryInfoField";
import { useEffect, useRef } from "react";

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
  useEffect(() => {
    if (!scrollToTopRef.current) return;
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, [country]);
  const scrollToTopRef = useRef<HTMLDivElement>(null);
  const selectedCountry: Country | null =
    countries?.find?.((cou: Country) => cou?.name?.common === country) || null;
  if (!selectedCountry || !countries) return <h1>loading</h1>;

  const { flags, name, region, subregion, tld, currencies, languages } =
    selectedCountry;

  const nativeName = Object.values(Object.values(name)[2])[0]["official"];
  return (
    <>
      <div ref={scrollToTopRef} className="scroll-to-top-element"></div>
      <div
        className={`${darkMode ? "country-page color-light" : "country-page"}`}
      >
        <div className="go-back-button-wrapper">
          <Button
            content={
              <div className="go-back-button">
                <BiArrowBack />
                <p> Go back</p>
              </div>
            }
            onClick={() => selectCountry(null)}
            darkMode={darkMode}
          />
        </div>
        <div className="country-page-main-section">
          <div className="country-page-flag box-shadow">
            {" "}
            <img src={flags.png} alt="" />
          </div>

          <div className="country-page-text">
            <h1 className="country-page-name">{name.common}</h1>
            <div className="country-page-details">
              <div className="country-text-top">
                <CountryInfoField name="Native name" value={nativeName} />
                <CountryInfoField
                  name="Population"
                  value={selectedCountry?.population.toLocaleString()}
                />
                <CountryInfoField name="Region" value={region} />
                <CountryInfoField name="Subregion" value={subregion} />
                <CountryInfoField
                  name="Capital"
                  value={
                    (selectedCountry?.capital && selectedCountry?.capital[0]) ||
                    "Not available"
                  }
                />
              </div>
              <div className="country-text-mid">
                <CountryInfoField
                  name="Top level domain"
                  value={(tld && tld[0]) || "Not available"}
                />
                <CountryInfoField
                  name={
                    Object.entries(currencies).length > 1
                      ? "Currencies: "
                      : "Currency: "
                  }
                  value={Object.entries(currencies)
                    .map((entry) => {
                      return ` ${entry[1].name}`;
                    })
                    .toString()}
                />
                <CountryInfoField
                  name={
                    Object.entries(languages).length > 1
                      ? "Languages: "
                      : "Language: "
                  }
                  value={Object.entries(languages)
                    .map((entry, index) => {
                      return index === Object.entries(languages).length - 1
                        ? ` ${entry[1].toString()}`
                        : `${entry[1].toString()}, `;
                    })
                    .join("")}
                />
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
                      <Button
                        darkMode={darkMode}
                        key={index}
                        onClick={() => goToCountry(countryToGoTo)}
                        content={
                          <>
                            {" "}
                            {
                              countries.find(
                                (country) =>
                                  country.fifa === border ||
                                  country.cca3 === border ||
                                  country.cioc === border
                              )?.name.common
                            }
                          </>
                        }
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
