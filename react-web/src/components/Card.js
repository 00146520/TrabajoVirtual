import React from 'react';
import Spinner from './Spinner';
import "../App.css";
const Card = ({loadingData, showData, weatherData, forecastData}) => {

    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;
    var url = ""
    var iconUrl =""

    var icon3 = "";
    var icon6 = "";
    var icon9 = "";
    
    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if(loadingData){
        return <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/wn/" ;
        iconUrl = url + weatherData.weather[0].icon + ".png";

        icon3 = url + forecastData.list[1].weather[0].icon + ".png";
        icon6 = url + forecastData.list[2].weather[0].icon + ".png";
        icon9 = url + forecastData.list[3].weather[0].icon + ".png";

        forecastDate3 = forecastData.list[1].dt_txt.substring(8,10)+ '/' +
        forecastData.list[2].dt_txt.substring(5,7)+ '/' +
        forecastData.list[3].dt_txt.substring(0,4)+ '' + forecastData.list[1].dt_txt.substring(11,13);

        forecastDate6 = forecastData.list[2].dt_txt.substring(8,10)+ '/' +
        forecastData.list[2].dt_txt.substring(5,7)+ '/' +
        forecastData.list[3].dt_txt.substring(0,4)+ '' + forecastData.list[2].dt_txt.substring(11,13);

        forecastDate9 = forecastData.list[3].dt_txt.substring(8,10)+ '/' +
        forecastData.list[2].dt_txt.substring(5,7)+ '/' +
        forecastData.list[3].dt_txt.substring(0,4)+ '' + forecastData.list[3].dt_txt.substring(11,13);
    }

    return(
        <div className="card mt-5 ">
            {
                showData === true? (
                    <div className= "container">
                        <div className= "card mb-3 mx-auto bg-dark text-light">
                            <div className= "row g-0">
                                <div className= "col-md-4">
                                    <h3 className='card-title'>{weatherData.name}</h3>
                                    <p className='card-date'>{date}</p>
                                    <h1 className='card-temp'>{(weatherData.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className='card-desc'>
                                        <img src={iconUrl} alt="icono"/>
                                        {weatherData.weather[0].description}
                                    </p>
                                    <img src = "https://images.pexels.com/photos/416911/pexels-photo-416911.jpeg?cs=srgb&dl=pexels-pixabay-416911.jpg&fm=jpg"
                                    className='img-fluid rounded-start' alt='...'></img>
                                </div>
                                <div className= "col-md-8">
                                    <div className= "card-body text-start mt-2">
                                    <h5 className='card-text'>Temperatura max: {(weatherData.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                    <h5 className='card-text'>Temperatura min: {(weatherData.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                    <h5 className='card-text'>Sensacion termica: {(weatherData.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                    <h5 className='card-text'>Humedad: {(weatherData.main.humidity)}%</h5>
                                    <h5 className='card-text'>Velocidad del viento: {(weatherData.wind.speed)}m/s</h5>
                                    </div>
                                    <hr/>
                                    <div className= "row mt-4">
                                        <div className= "col">
                                            <p>{forecastDate3}h</p>
                                            <p className='description'><img src={icon3} alt="icon"/>{forecastData.list[1].weather[0].description}</p>
                                            <p className='temp'>{(forecastData.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className= "col">
                                            <p>{forecastDate6}h</p>
                                            <p className='description'><img src={icon6} alt="icon"/>{forecastData.list[2].weather[0].description}</p>
                                            <p className='temp'>{(forecastData.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className= "col">
                                            <p>{forecastDate9}h</p>
                                            <p className='description'><img src={icon9} alt="icon"/>{forecastData.list[3].weather[0].description}</p>
                                            <p className='temp'>{(forecastData.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className='card  text-light'>No hay datos</h2>
                )
            }
        </div>
        );
}
export default Card;