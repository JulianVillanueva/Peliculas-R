import React, { useEffect,useState} from 'react';
import { getPeliculas, deletePelicula } from '../actions/peliculasActions';
//import '../styles/peliculaList.css'
import '../App.css'

const PeliculaList = () => {
    const[peliculas, setPeliculas] = useState([]);

    useEffect(()=>{
        const fetchPeliculas = async() =>{
            try{
                const data = await getPeliculas();
                setPeliculas(data);
            }catch(error){
                console.error("error: ", error)
            }
        };
        fetchPeliculas()
    },[]);

    const handlePeliculas = async(id) =>{
        try{
            await deletePelicula(id);
            setPeliculas(peliculas.filter(pelicula => pelicula.id !== id))
        }catch(error){
            console.error('error: ', error)
        }
    };

    return(
        <div>
            <h1>Peliculas</h1>
            <ul>
                {peliculas.map(peliculas => (
                    <li key={peliculas.id}>
                        <h2>{peliculas.titulo}</h2>
                        <img src={`${peliculas.imagen}`} alt={peliculas.titulo} />
                        <p>{peliculas.descripcion}</p>
                        <button onClick={() => handlePeliculas(peliculas.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )


} 
export default PeliculaList;