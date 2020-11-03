import React, { useEffect, useState } from 'react';

import WeatherCard from './components/WeatherCard';

import axios from 'axios';

import './tailwind.output.css';

export default function App() {

    const [forecasts, setForecasts] = useState([]);
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/11222?apikey=R534nJFev2IZTQZSkZVFvwfRe63KJ9wR&metric=true').then(resp => {
            setForecasts(resp.data.DailyForecasts);
        });
    }, []);

    function handleClick() {
        setIsNight(!isNight);
    }

    return (
        <div className={`${isNight ? "bg-gray-900 text-white" : ""}`}>
            <div className="content-center grid grid-cols-5 gap-4 mx-auto w-1/2 sm:w-11/12 md:w-2/3 lg:w-1/2 h-screen">
                <h1 className="col-span-5 text-center font-bold text-xl">Next 5 days forecast</h1>
                {forecasts.map((F, index) =>
                    <WeatherCard forecast={F} isFirst={index === 0} isNight={isNight} key={index.toString()} />)}
                <button className="col-span-5 sm:col-start-3 sm:col-span-1 bg-blue-700 hover:bg-blue-600 focus:outline-none border rounded-xl p-1 text-white" 
                onClick={handleClick}>
                    {isNight ? "Day" : "Night"}
                </button>
            </div>
        </div>
    );
}
