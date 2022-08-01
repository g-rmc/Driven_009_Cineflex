import { Link } from "react-router-dom";
import styled from "styled-components"

export default function End({setFooterStatus, footerStatus, selected}) {

    return(
        <Container>
            <h1>Pedido feito com sucesso!</h1>

            <div>
                <h2>Filme e Sessão</h2>
                <h3>{footerStatus.title}</h3>
                <h3>{`${footerStatus.date} ${footerStatus.time}`}</h3>
            </div>

            <div>
                <h2>Ingressos</h2>
                {selected.seats.map((seat, index) => <h3 key={index}>Assento {seat}</h3>)}
            </div>

            <div>
                <h2>Comprador</h2>
                <h3>Nome: {selected.name}</h3>
                <h3>CPF: {selected.cpf}</h3>
            </div>

            <Link to="/" style={{textDecoration:'none'}}>
                <button onClick={() => setFooterStatus({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''})}>
                    Voltar para Home
                </button>    
            </Link>

        </Container>
    )
}

const Container = styled.div`
    h1{
        margin-top: 40px;
        width: 100%;
        height: 110px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #247A6B;
    }

    h2{
        margin-top: 40px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #293845;
    }

    button{
        width: 80%;
        height: 43px;
        margin: 100px auto 0 auto;
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