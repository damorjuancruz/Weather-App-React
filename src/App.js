import React, { useEffect } from 'react';

import axios from 'axios';

import './tailwind.output.css';

export default function App() {

    // useEffect(() => {
    //     axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/11222?apikey=R534nJFev2IZTQZSkZVFvwfRe63KJ9wR&metric=true').then(resp => {
    //     let date = new Date(resp.data.DailyForecasts[0].Date);
    //     console.log(date.toLocaleDateString());
    // });}, [])

    return (
        <div className='container'>
            <div className="row m-auto w-50 text-center align-items-center">
                <div className="col p-1 border border-secondary rounded m-1">
                    hello
                </div>
                <div className="col p-1 border rounded m-1">
                    hola
                </div>
                <div className="col p-1 border rounded m-1">
                    hola
                </div>
                <div className="col p-1 border rounded m-1">
                    hola
                </div>
                <div className="col p-1 border rounded m-1">
                    hola
                </div>
            </div>
        </div>
    )
}
