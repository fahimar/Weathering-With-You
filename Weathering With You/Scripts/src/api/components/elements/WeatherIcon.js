import React from 'react';


const WeatherIcon = ({icon}) =>(
    <div className = "icon_weather">
        <img src={'../../../../Scripts/src/images/v2/' + icon + '.png'} width = "150" alt = "weather"/>
    </div>
);

export default WeatherIcon;

