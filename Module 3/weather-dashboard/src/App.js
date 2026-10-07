import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Find city coordinates
      const locationResponse = await fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name=" +
          encodeURIComponent(city) +
          "&count=1&language=en&format=json"
      );

      const locationData = await locationResponse.json();

      if (
        !locationData.results ||
        locationData.results.length === 0
      ) {
        setError("City not found. Please enter a valid city name.");
        setLoading(false);
        return;
      }

      const place = locationData.results[0];

      // Get weather
      const weatherResponse = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          place.latitude +
          "&longitude=" +
          place.longitude +
          "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto"
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        city: place.name,
        country: place.country,
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        code: weatherData.current.weather_code
      });

    } catch (error) {
      setError(
        "Something went wrong. Please check your internet connection."
      );
    }

    setLoading(false);
  };

  const getWeather = (code) => {
    if (code === 0) {
      return "☀️ Clear Sky";
    }

    if (code === 1 || code === 2 || code === 3) {
      return "⛅ Cloudy";
    }

    if (code === 45 || code === 48) {
      return "🌫️ Foggy";
    }

    if (code >= 51 && code <= 67) {
      return "🌧️ Rain";
    }

    if (code >= 71 && code <= 77) {
      return "❄️ Snow";
    }

    if (code >= 80 && code <= 82) {
      return "🌦️ Rain Showers";
    }

    if (code >= 95) {
      return "⛈️ Thunderstorm";
    }

    return "Weather information";
  };

  return (
    <div className="app">

      <div className="container">

        <h1>🌤️ Weather Dashboard</h1>

        <p className="subtitle">
          Search for the current weather of any city
        </p>

        <div className="search">

          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchWeather();
              }
            }}
          />

          <button onClick={searchWeather}>
            Search
          </button>

        </div>

        {loading && (
          <p className="loading">
            Loading weather...
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {weather && !loading && (
          <div className="card">

            <h2>
              {weather.city}, {weather.country}
            </h2>

            <div className="temperature">
              {Math.round(weather.temperature)}°C
            </div>

            <h3>
              {getWeather(weather.code)}
            </h3>

            <div className="details">

              <div className="detail-box">
                <span>💧</span>
                <p>Humidity</p>
                <strong>
                  {weather.humidity}%
                </strong>
              </div>

              <div className="detail-box">
                <span>💨</span>
                <p>Wind Speed</p>
                <strong>
                  {weather.wind} km/h
                </strong>
              </div>

            </div>

          </div>
        )}

        {!weather && !error && !loading && (
          <p className="message">
            Enter a city name to see the weather.
          </p>
        )}

      </div>

    </div>
  );
}

export default App;