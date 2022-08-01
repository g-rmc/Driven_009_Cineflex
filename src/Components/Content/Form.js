import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form({selected, setSelected, setFooterStatus, footerStatus}){

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
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

    return (
        <form onSubmit={handleForm}>
            <h5>Nome do comprador:</h5>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />

            <h5>CPF do comprador:</h5>
            <input
                type="text"
                pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                required
            />

            <button>Reservar assento(s)</button>
        </form>
    )
}