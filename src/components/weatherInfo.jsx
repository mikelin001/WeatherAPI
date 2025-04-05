
function WeatherInfo({City, temperature, windDirection, humidity})
{
    return(
        <div>
            <h1>{`City: ${City}`}</h1>
            <ul>
                <li>{`Temperature: ${temperature}F`}</li>
                <li>{`Wind Direction: ${windDirection}`}</li>
                <li>{`Humidity: ${humidity}%`}</li>
            </ul>
        </div>
    )
}

export default WeatherInfo