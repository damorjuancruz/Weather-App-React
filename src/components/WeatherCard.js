import React from 'react'

export default function WeatherCard({ forecast, isFirst, isNight }) {
    let date = new Date(forecast.Date);
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = dayNames[date.getDay()];
    // console.log(forecast);

    let iconNumber = isNight ? forecast.Night.Icon : forecast.Day.Icon;
    let iconURL = `https://developer.accuweather.com/sites/default/files/${iconNumber >= 10 ?
            iconNumber.toString() :
            "0" + iconNumber.toString()}-s.png`;

    let max = forecast.Temperature.Maximum.Value.toString();
    let min = forecast.Temperature.Minimum.Value.toString();

    return (
        <div className={`col col-span-5 sm:col-span-1 text-center border rounded-xl p-1 
        ${isFirst ? (isNight ? "border-white" : "border-black") : (isNight ? "border-gray-700" : "border-gray-500")}`}>
            <i>{day}</i>
            <img src={iconURL} className="m-auto" />
            <p>{max} | {min}</p>
        </div>
    )
}
