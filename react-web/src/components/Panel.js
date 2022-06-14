import React, {useState} from 'react';
import Formulario from './Formulario';
import Card from './Card';

const Panel = () => {

    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=92951754a615968098be9f6bf34db71f&lang=es";
    let ciudadUrl = "&q=";

    let UrlPrediccion = "https://api.openweathermap.org/data/2.5/forecast?appid=92951754a615968098be9f6bf34db71f&lang=es";

    const [clima, setClima] = useState([]);
    const [prediccion, setPrediccion] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mostrar, setMostrar] = useState(false);
    const [localizacion, setLocalizacion] = useState("");

    const getLocalizacion = async(loc) => {
        setCargando(true);
        setLocalizacion(loc);

        urlClima = urlClima + ciudadUrl + loc;

        await fetch(urlClima).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((data) => {
            console.log(data);
            setClima(data);
        }).catch(error =>{
            console.log(error);
            setCargando(false);
            setMostrar(false);
        });

        //prediccion
        UrlPrediccion = UrlPrediccion + ciudadUrl + loc; 

        await fetch(UrlPrediccion).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setPrediccion(forecastData);
            setCargando(false);
            setMostrar(true);
        }).catch(error =>{
            console.log(error);
            setCargando(false);
            setMostrar(false);
        });

    }

    return(
        <React.Fragment> 
            <Formulario
                newLocation = {getLocalizacion}
            />
            <Card
                showData = {mostrar}
                loadingData = {cargando}
                weatherData = {clima}
                forecastData = {prediccion}
            />
        </React.Fragment>
    );
}

export default Panel;