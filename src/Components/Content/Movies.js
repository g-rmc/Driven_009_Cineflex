import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Movies() {

    const[movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

        promise.then(obj => {
            setMovies(obj.data);
        })
    }, [])

    function Movie({movieId, posterURL, title}){
        return(
            <Link to={`/sessoes/${movieId}`}>
                <div className="movie">
                    <img src={posterURL} alt={title}/>
                </div>         
            </Link>
        )
    }

    if (movies.length === 0){
        return(<div className="center">Carregando...</div>)
    }

    return(
        <div className="movies">
            <h1>Selecione o filme</h1>
            <div>
                {movies.map(movie => <Movie key={movie.id} movieId={movie.id} title={movie.title} posterURL={movie.posterURL}/>)}
            </div>
        </div>
    )
}