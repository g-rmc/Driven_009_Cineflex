import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Sessions({setFooterStatus, footerStatus}) {

    const { idFilme } = useParams();

    const[sessions, setSessions] = useState([]);

    useEffect(() => {
        setFooterStatus({...footerStatus, weekday: '', date: '', time: '', show: true});
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);
        window.scrollTo(0,0);

        promise.then(obj => {
            setSessions(obj.data);
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (sessions.length === 0){
        return(<Loading>Carregando...</Loading>)
    }

    function Showtime ({name, sessionId, weekday, date}){
        return(
            <Link to={`/assentos/${sessionId}`} style={{textDecoration:'none'}}>
                <Button onClick={() => {
                    footerStatus.weekday = weekday;
                    footerStatus.date = date;
                    footerStatus.time = name
                }}>
                    {name}
                </Button>
            </Link>
        )
    }

    function Days({showtimes, date, weekday}){
        return(
            <div>
                <h2>{`${weekday} - ${date}`}</h2>
                <ShowtimeList>
                    {showtimes.map((showtime => <Showtime 
                        key={showtime.id}
                        sessionId={showtime.id}
                        name={showtime.name}
                        weekday={weekday}
                        date={date}/>
                    ))}
                </ShowtimeList>
            </div>
        )
    }

    return (
        <Container>
            <h1>Selecione o horário</h1>
            {sessions.days.map(day => <Days key={day.id} showtimes={day.showtimes} date={day.date} weekday={day.weekday}/>)}
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

    h2 {
        width: 100%;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
    }
`

const ShowtimeList = styled.div`
    margin: 30px 0;
    display: flex;
`

const Button = styled.div`
    width: 83px;
    height: 43px;
    margin-right: 10px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #b3632a;
    }

    &:active {
        transform: translateY(2px);
    }
`