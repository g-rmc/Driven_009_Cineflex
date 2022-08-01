import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form({selected, setSelected, setFooterStatus, footerStatus}){

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        if (selected.seats.length === 0){
            alert('Você não escolheu seus assentos!!');
            return;
        }
        selected.name = name;
        selected.cpf = cpf;
        setSelected = {...selected};
        sendRequest(selected);
    }

    function sendRequest({ids, name, cpf}){
        const requestObj = {ids, name, cpf};
        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', requestObj);
        promise.then(() => {
            setFooterStatus({...footerStatus, show: false});
            navigate('/sucesso')
        });
        promise.catch(() => alert('Tente novamente mais tarde :('))
    }

    function formatCPF(e){
        let v = e.replace(/\D/g,"");
        v = v.replace(/(\d{3})(\d)/,"$1.$2");
        v = v.replace(/(\d{3})(\d)/,"$1.$2"); 
        v = v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    
        setCpf(v);
    } 

    return (
        <Inputs onSubmit={handleForm}>
            <h5>Nome do comprador:</h5>
            <input
                type="text"
                value={name}
                name='nome'
                placeholder="Digite seu nome..."
                onChange={(event) => setName(event.target.value)}
                required
            />

            <h5>CPF do comprador:</h5>
            <input
                type="text"
                pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                value={cpf}
                name='cpf'
                placeholder="Digite seu CPF..."
                onChange={(event) => {formatCPF(event.target.value)}}
                required
            />

            <button>Reservar assento(s)</button>
        </Inputs>
    )
}

const Inputs = styled.form`
    height: 300px;
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5 {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        margin: 5px 0 10px 0;
        padding-left: 10px;
        width: 100%;
        height : 50px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    button {
        width: 60%;
        height: 43px;
        margin: 20px auto;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;  
    }

    button:hover {
        background-color: #b3632a;
    }

    button:active {
        transform: translateY(2px);
    }
`