import {useEffect, useState} from 'react'
import WeatherInfo from './components/weatherInfo';
import './App.css'

const API_KEY = import.meta.env.VITE_API_ACCESS_KEY;

function App() {

  const [list, setList] = useState([]);
  const [info, setInfo] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  
  useEffect( () =>
  {
    const initialArray = ["Albany", "Montgomery", "Cayuga", "Genesee", "Dutchess", "Broome", "New York City", "Niagara", "Chenango", "Chautauqua"]
    const fetchInitialData = async () =>
    {
      for(let index=0; index < initialArray.length; index++)
      {
      const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${initialArray[index]}&units=I&key=${API_KEY}`);
      const json = await response.json();
      setList((previousState) => {
        if (previousState.some(item => item.data[0].city_name === json.data[0].city_name)) {
          return previousState; // Return the same array if item already exists
        }
        return [...previousState, json]; // Add item if not already present
      });
      }
      
    }
    fetchInitialData().catch(console.error)
  },[])
  
  const searchItem = (searchValue) => {
    setSearchInput(searchValue);
  
    if (searchValue !== "") {
      setList((previousState) => 
        previousState.filter(
          (item) => item.data[0].city_name.toLowerCase() !== searchValue.toLowerCase()
        )
      );
    }
  };

  return (
  <>
    <div className="container">
      <h1>My weather API</h1>
      <form>
      <input type="text" placeholder="Remove City..." onChange={(eventObject) => setInfo(eventObject.target.value)}></input>
      <button type="submit" onClick={(e) => {
      e.preventDefault(); // Prevent form from reloading the page
      searchItem(info);   // Call your search logic
    }}>Remove</button>
      </form>
      {list.length > 0 && list.map((key)=>{
      return <WeatherInfo key={key.data[0].city_name} City={key.data[0].city_name} temperature={key.data[0].temp} windDirection={key.data[0].wind_cdir_full} humidity={key.data[0].rh}/> 
      })}
    </div>
  </>
  )
}

export default App
