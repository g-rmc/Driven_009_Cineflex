import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sessions({setFooterStatus, footerStatus}) {

    const { idFilme } = useParams();

    const[sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then(obj => {
            setFooterStatus({...footerStatus, show: true});
            setSessions(obj.data);
        })
    }, []);

    if (sessions.length === 0){
        return(<div className="center">Carregando...</div>)
    }

    function Showtime ({name, sessionId, weekday, date}){
        return(
            <Link to={`/assentos/${sessionId}`} style={{textDecoration:'none'}}>
                <div className="button-showtime" onClick={() => {
                    footerStatus.weekday = weekday;
                    footerStatus.date = date;
                    footerStatus.time = name
                }}>
                    {name}
                </div>
            </Link>
        )
    }

    function Days({showtimes, date, weekday}){
        return(
            <div>
                <h2>{`${weekday} - ${date}`}</h2>
                <div className="buttons-showtime">
                    {showtimes.map((showtime => <Showtime 
                        key={showtime.id}
                        sessionId={showtime.id}
                        name={showtime.name}
                        weekday={weekday}
                        date={date}/>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="sessions">
            <h1>Selecione o horário:</h1>
            {sessions.days.map(day => <Days key={day.id} showtimes={day.showtimes} date={day.date} weekday={day.weekday}/>)}
        </div>
    )
}