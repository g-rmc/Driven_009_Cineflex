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
        })
    }, []);

    if (seats.length === 0){
        return(<div className="center">Carregando...</div>)
    };

    let seatsArr = seats.seats.map(seat => {
        if (seat.isAvailable){
            return {...seat, status: 'available'};
        } else {
            return {...seat, status: 'notAvailable'};
        }
    })

    console.log(seats)

    function Seat({ status, name, id }) {

        switch (status) {
            case 'available':
                return (<div className="available">{name}</div>);
            case 'notAvailable':
                return (<div className="notAvailable">{name}</div>);
            case 'selected':
                return (<div className="selected">{name}</div>);
            default:
                return(<>Erro!</>);
        }
    }

    return(
        <div className="seats">
            <h1>Selecione o(s) assento(s)</h1>

            <div className="seats-map">
                {seatsArr.map(seat => <Seat key={seat.id} id={seat.id} name={seat.name} status={seat.status}/>)}
                {/* CONFIGURAR A VISUALIZAÇÃO PARA FIXAR A ORDEM DOS ASSENTOS */}
            </div>

            <div style={{color:'red'}}>
                !!!Legenda de assentos!!!
            </div>

            <form>
                Nome do comprador:
                <input></input>
                CPF do comprador:
                <input></input>
            </form>
            
        </div>
    )
}