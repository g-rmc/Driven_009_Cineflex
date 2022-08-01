import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import styled from "styled-components";

export default function Seats({setFooterStatus, footerStatus, selected, setSelected}) {

    const { idSessao } = useParams();

    const[seats, setSeats] = useState([]);

    const legend = [    {class:<SeatSelected />, title:'Selecionado'},
                        {class:<SeatAvailable />, title:'Disponível'}, 
                        {class:<SeatNotAvailable />, title:'Indisponível'}
                    ];

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        window.scrollTo(0,0);

        promise.then(obj => {
            setFooterStatus({...footerStatus, show: true});
            setSeats(obj.data);
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (seats.length === 0){
        return(<Loading>Carregando...</Loading>)
    };

    function Seat({ isAvailable, name, id }) {

        switch (isAvailable) {
            case true:
                return (<SeatAvailable onClick={() => selSeat(name, id, true)}>{name}</SeatAvailable>);
            case false:
                return (<SeatNotAvailable onClick={() => alert('Esse assento não está disponível!')}>{name}</SeatNotAvailable>);
            case 'selected':
                return (<SeatSelected onClick={() => selSeat(name, id, 'selected')}>{name}</SeatSelected>);
            default:
                return(<>Erro!</>);
        }
    }

    function selSeat(name, id, status){
 
        const indexArr = Number(name) - 1;

        let newSelected = {...selected}

        if (status === true){

            seats.seats[indexArr].isAvailable = 'selected';

            selected.ids.push(id);
            selected.seats.push(name);

        } else {

            seats.seats[indexArr].isAvailable = true;

            newSelected.ids = selected.ids.filter(value => value !== id);
            newSelected.seats = selected.seats.filter(value => value !== name);
        } 

        setSeats({...seats});
        setSelected(newSelected);
    }

    return(
        <Container>
            <h1>Selecione o(s) assento(s)</h1>

            <SeatsMap>
                
                {seats.seats.map(seat => <Seat key={seat.id} id={seat.id} name={seat.name} isAvailable={seat.isAvailable}/>)}

            </SeatsMap>

            <Legend>

                {legend.map((value, index) => 
                    <div key={index}>
                        {value.class}
                        <h6>{value.title}</h6>
                    </div>
                )}

            </Legend>

            <Form selected={selected} setSelected={setSelected} footerStatus={footerStatus} setFooterStatus={setFooterStatus}/>
            
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
    display: flex;
    flex-direction: column;
    align-items: center;

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

const SeatsMap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, auto);

    div {
        width: 26px;
        height: 26px;
        margin-top: 18px;
        border-width: 1px;
        border-style: solid;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }
`

const SeatAvailable = styled.div`
    background: #C3CFD9;
    border-color: #7B8B99;
    cursor: pointer;

    &:hover {
        background: #97a0a8;
    }

    &:active {
        transform: translateY(2px);
    }
`

const SeatNotAvailable = styled.div`
    background: #FBE192;
    border-color: #F7C52B;
`

const SeatSelected = styled.div`
    background: #8DD7CF;
    border-color: #1AAE9E;
    cursor: pointer;

    &:hover {
        background: #67a19c;
    }

    &:active {
        transform: translateY(2px);
    }
`

const Legend = styled.div `
    margin: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: auto;
        pointer-events: none;
    }

    div div {
        width: 26px;
        height: 26px;
        margin-top: 18px;
        border-width: 1px;
        border-style: solid;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }

    h6 {
        margin-top: 7px;
        font-size: 13px;
        line-height: 15px;
        color: #4E5A65;
    }
`