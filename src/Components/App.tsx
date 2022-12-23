import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "./CountryList";
import Header from "./Header";
import CountryPage from "./CountryPage";
import SearchCountry from "./SearchCountry";
import Loading from "./Loading";
import "../css/App.css";

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: { ara: { official: string; common: string } };
  };
  flags: { png: string; svg: string };
  population: number;
  region: string;
  capital: string[];
  subregion: string;
  tld: string[];
  currencies: { [val: string]: { name: string; symbol: string } };
  borders: string[];
  fifa: string;
  cca3: string;
  cioc: string;
  languages: { [val: string]: string };
}

const App = (): JSX.Element => {
  const regionList: string[] = [
    "All Regions",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const [countries, setCountries] = useState<Country[] | null>(null);
  const [displayCountries, setDisplayCountries] = useState<Country[] | null>(
    countries
  );

  const [region, setRegion] = useState<string>("All Regions");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [error, setError] = useState<string>("");

  document?.querySelector("body")?.classList.toggle("bg-very-dark", darkMode);
  useEffect(() => {
    if (region === "All Regions") {
      setDisplayCountries(countries);
      return;
    }

    axios
      .get(`https://restcountries.com/v3.1/region/${region.toLowerCase()}`, {
        method: "GET",
      })
      .then((res) => {
        setDisplayCountries(res.data);
      })
      .catch((error) => setError(error));
  }, [region]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`, {
        method: "GET",
      })
      .then((res) => setCountries(res.data))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (!countries) return;
    const tempCountries = [...countries].filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayCountries(tempCountries);
  }, [searchQuery, countries]);

  function selectCountry(country: string | null): void {
    setActiveCountry(country);
  }

  function toggleMode(): void {
    setDarkMode((prev) => !prev);
  }

  function handleRegion(region: string): void {
    setRegion(region);
  }

  function handleSearchQuery(searchQuery: string): void {
    setSearchQuery(searchQuery);
  }

  function goToCountry(country: string | null): void {
    setActiveCountry(country);
  }

  if (!countries || !displayCountries) return <Loading />;
  return (
    <div className={`container ${darkMode ? "bg-very-dark" : "bg-light"}`}>
      <p>{error}</p>
      <Header toggleMode={toggleMode} darkMode={darkMode} />
      {!activeCountry && (
        <>
          <SearchCountry
            searchQuery={searchQuery}
            region={region}
            handleRegion={handleRegion}
            handleSearchQuery={handleSearchQuery}
            darkMode={darkMode}
            regionList={regionList}
          />
        </>
      )}

      {activeCountry && (
        <CountryPage
          country={activeCountry}
          countries={countries}
          selectCountry={selectCountry}
          darkMode={darkMode}
          goToCountry={goToCountry}
        />
      )}
      {!activeCountry && (
        <CountryList
          countries={displayCountries}
          selectCountry={selectCountry}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default App;
