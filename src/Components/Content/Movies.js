import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movies({footerStatus, setFooterStatus}) {

    const[movies, setMovies] = useState([]);

    useEffect(() => {

        setFooterStatus({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''});

        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

        promise.then(obj => {
            setMovies(obj.data);
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function Movie({movieId, posterURL, title}){
        return(
            <Link to={`/sessoes/${movieId}`}>
                <Poster onClick={() => {
                    footerStatus.title = title;
                    footerStatus.posterURL = posterURL
                }}>
                    <img src={posterURL} alt={title}/>
                </Poster>         
            </Link>
        )
    }

    if (movies.length === 0){
        return(<Loading>Carregando...</Loading>)
    };


    return(
        <Container>
            <h1>Selecione o filme</h1>
            <div>
                {movies.map(movie => <Movie key={movie.id} movieId={movie.id} title={movie.title} posterURL={movie.posterURL}/>)}
            </div>
        </Container>
    )
}

const Loading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    padding: 0 30px;

    div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    h1 {
        height: 110px;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

const Poster = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        background-color: #c9c9c9;
        opacity: 60%;
    }

    &:active{
        transform: translateY(2px);
    }

    img {
        width: 129px;
        height: 193px;
        margin: auto;
    }
`