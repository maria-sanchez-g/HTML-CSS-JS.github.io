export default function CheckWeather({ onWeatherChange }) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];
  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
    // ++ try to destructure this function from the props object
    onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };
  return <button onClick={randomWeather}>Check Weather</button>;
}
