import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sessions({setFooterStatus}) {

    const { idFilme } = useParams();

    const[sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(obj => {
            console.log(obj.data);
            setFooterStatus({show: true});
            setSessions(obj.data);
        })
    }, [])

    if (sessions.length === 0){
        return(<div className="center">Carregando...</div>)
    }

    return (
        <div className="sessions">
            Aqui tem sessões: {idFilme}
        </div>
    )
}