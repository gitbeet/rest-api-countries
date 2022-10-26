import axios from "axios";
import { useEffect, useState } from "react";
import "../css/App.css";
import CountryList from "./CountryList";
import Header from "./Header";
import CountryPage from "./CountryPage";
import SearchCountry from "./SearchCountry";
import Loading from "./Loading";

function App() {
  const regionList = [
    "All Regions",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [darkMode, setDarkMode] = useState(false);

  const [activeCountry, setActiveCountry] = useState();

  const [countries, setCountries] = useState();
  const [displayCountries, setDisplayCountries] = useState(countries);

  const [regionCountries, setRegionCountries] = useState();

  const [region, setRegion] = useState("europe");
  const [searchQuery, setSearchQuery] = useState("");

  const [error, setError] = useState("");

  document.querySelector("body").classList.toggle("bg-very-dark", darkMode);

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
    let tempCountries = [...countries].filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayCountries(tempCountries);
  }, [searchQuery, countries]);

  function selectCountry(country) {
    setActiveCountry(country);
  }

  function toggleMode() {
    setDarkMode((prev) => !prev);
  }

  function handleRegion(region) {
    setRegion(region);
  }

  function handleSearchQuery(searchQuery) {
    setSearchQuery(searchQuery);
  }

  function goToCountry(country) {
    console.log(country);
    setActiveCountry(countries.find((cou) => cou.name.common === country));
  }

  if (!countries || !displayCountries) return <Loading />;
  return (
    <div className="container">
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
}

export default App;
