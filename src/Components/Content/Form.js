import "./style.css";
import { useState } from "react";

export default function Form(){

    const[name, setName] = useState('');
    const[cpf, setCpf] = useState('');

    function handleForm(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleForm}>
            <h5>Nome do comprador:</h5>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                require
            />

            <h5>CPF do comprador:</h5>
            <input
                type="text"
                pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                require
            />

            <button>Reservar assento(s)</button>
        </form>
    )
}