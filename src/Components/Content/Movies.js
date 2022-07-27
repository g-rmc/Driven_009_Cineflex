import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies() {

    const[movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        promise.then(obj => {
            console.log(obj.data);
            setMovies(obj.data);
        })
    }, [])

    function Movie({posterURL, title}){
        return(
            <div className="movie" onClick={() => (console.log('vai ter o link aqui'))}>
                <img src={posterURL} alt={title}/>
            </div>
        )
    }

    if (movies.length === 0){
        return(<div className="center">Carregando...</div>)
    }

    return(
        <div className="movies">
            <h1>Selecione o filme</h1>
            <div>
                {movies.map(movie => <Movie key={movie.id} title={movie.title} posterURL={movie.posterURL}/>)}
            </div>
        </div>
    )
}