import { useEffect, useState } from 'react';
import WeatherReport from './WeatherReport';

function Header() {
  const [cityName, setCityName] = useState();
  const [WeatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  function handleClick(e) {
    e.target.value = '';
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const city = fd.get('search');
    setCityName(city);
  }

  useEffect(() => {
    const getWeatherData = async function (cityName = 'chennai') {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=078bf343e966aa3a3b9e6144a4901b8d&units=metric `
        );

        if (!data.ok) {
          throw new Error('City not found!');
        }

        const weatherReport = await data.json();

        setWeatherData({
          name: weatherReport.name,
          humidity: weatherReport.main.humidity,
          pressure: weatherReport.main.pressure,
          temp: weatherReport.main.temp,
          visibility: weatherReport.visibility,
          description: weatherReport.weather[0].description,
          wind: weatherReport.wind.speed,
          cloud: weatherReport.clouds.all,
          main: weatherReport.weather[0].main,
          feelslike: weatherReport.main.feels_like,
        });

        //
      } catch (error) {
        setError(true);
        const timer = setTimeout(() => {
          setError(false);
        }, 2000);
      }
    };
    getWeatherData(cityName);
  }, [cityName]);

  return (
    <main>
      <header className="align-middle mt-1 ">
        <div className="text-center mt-1 space-y-3">
          <h1 className="text-2xl text-emerald-300 ">Weather App</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              className=" w-64 text-center outline-none bg-slate-800 pl-2 p-1 border-none rounded-md text-lg  sm:w-80 "
              name="search"
              type="text"
              onClick={handleClick}
              placeholder="Search here"
            />
          </form>
        </div>
        {error && (
          <p className=" mt-2 text-red-600 text-center">City not found!</p>
        )}

        <div className="grid justify-center ">
          <div className=" box-style text-slate-200 images flex mt-6 w-72 h-52 py-6 sm:w-[400px] sm:gap-10 sm:h-64  bg-slate-800  rounded-2xl justify-between gap-5">
            <h2 className="ml-4 text-lg font-semibold sm:text-2xl">
              {WeatherData.name}
            </h2>
            <div className=" font-bold text-xl sm:text-2xl space-y-2 mr-4">
              <p>{WeatherData.main} </p>
              <p>{WeatherData.temp}℃ </p>
            </div>
          </div>
        </div>
      </header>

      <WeatherReport cloud={WeatherData.cloud} data={WeatherData} />
    </main>
  );
}

export default Header;
