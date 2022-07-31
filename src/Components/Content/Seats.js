import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

export default function Seats({setFooterStatus, footerStatus}) {

    const { idSessao } = useParams();

    const[seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(obj => {
            setFooterStatus({...footerStatus});
            setSeats(obj.data);
            console.log(obj.data)
        })
    }, []);

    if (seats.length === 0){
        return(<div className="center">Carregando...</div>)
    };

    return(
        <div className="seats">
            Aqui tem assentos: {`${idSessao}`}
        </div>
    )
}