import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CountryContainer from './containers/CountryContainer';


function App() {
  return (
    <>
      <CountriesList />
      <CountryContainer />
    </>
  );
}


const CountriesList = () => {

    const [countries, setCountries] = useState([]);

    useEffect(
      () => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(result => setCountries(result))
      }, []
    )

    return (
      <>
        <form action="" id="country-pick">
        <label for="country-selection">Select A Country</label>
        <select name="">
          {countries.map((countries, index) => (
          <option key={index}>
            {countries.name.common}
          </option>))}
        </select>
        <input type="submit" value="Mark as visited"></input>
        
        </form>
      </>
    )


}

export default App;
