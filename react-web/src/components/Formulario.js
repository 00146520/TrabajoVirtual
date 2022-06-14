import React, {useState} from 'react';
import "../App.css";
const Formulario = ({newLocation}) => {
    const [city, setCity] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        if(city === ""|| !city ) return; 
        newLocation(city);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className='searchBar'>
                    <input type="text" className='search' placeholder='Ciudad' onChange={(e) => 
                    setCity(e.target.value)}/>
                    <button className='btn'type='submit'>Buscar</button>
                </div>

            </form>
        </div>
    );
}
export default Formulario;