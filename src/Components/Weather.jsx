import { useEffect, useState } from "react";

function Weather() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (input === "") return; 

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=2e7c9a8db304473992b151719252802&q=${input}`
        );
        const info = await response.json();
        setWeather(info);
      } catch (err) {
        setWeather("");
      }

    };
 
    fetchData();
  }, [input]);  

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <div className="WeatherDiv">
      <form onSubmit={handleSubmit}>
        <h1>Enter City!</h1>
        <h1>Weather</h1>
        <input type="text" value={input} onChange={handleChange} placeholder="Enter city..." />
      </form>
    </div>
    <div className="WeatherDiv">
    {weather && weather.location && (
        <div id="Output-div">
          <h2>{weather.location.name}</h2>
          <p>Temperature: {weather.current?.temp_c}°C</p>
          <p>Condition: {weather.current?.condition?.text}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Weather;
