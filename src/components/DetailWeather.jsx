import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import "./DetailWeather.css"

const API_KEY = import.meta.env.VITE_API_ACCESS_KEY;

function DetailWeather() 
{
    const params = useParams(); //Albany
    const [CountryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        const getWeatherDetails = async () =>
        {
            const details = await fetch(`https://api.weatherbit.io/v2.0/current?city=${params.city}&units=I&key=${API_KEY}`);
            const detailsJSON = await details.json();
            setCountryDetails(detailsJSON.data[0]);
            
        }
        getWeatherDetails().catch(console.error);
    },[params.city])

    return(
        <>
            {CountryDetails? 
            (<>
                <div className='detailContainer'>
                <h1>{CountryDetails.city_name}</h1>
                <br/>
                <ul className='weatherList'>
                    <li>Wind speed: {CountryDetails.wind_spd}m/s</li>
                    <li>Gust: {CountryDetails.gust}m/s</li>
                    <li>Wind Direction: {CountryDetails.wind_cdir_full}</li>
                    <li>Weather: {CountryDetails.weather.description}</li>
                    <li>Feels like: {CountryDetails.app_temp}F</li>
                    <li>Temperature: {CountryDetails.temp}F</li>
                </ul>
                </div>
            </>):(<p>Loading</p>)}
        </>
    )
}

export default DetailWeather