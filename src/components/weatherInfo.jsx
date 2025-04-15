import { Link } from 'react-router-dom'

function WeatherInfo({City, temperature, windDirection, humidity})
{
    return(
        <div>
            <h1>
                <Link to={`/Detail/${City}`} key={City}> {`City: ${City}`} </Link>
            </h1>
            <ul>
                <li>{`Temperature: ${temperature}F`}</li>
                <li>{`Wind Direction: ${windDirection}`}</li>
                <li>{`Humidity: ${humidity}%`}</li>
            </ul>
        </div>
    )
}

export default WeatherInfo