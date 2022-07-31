import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header({setFooterStatus}) {

    return(
        
        <Container>
            <Link to="/" style={{textDecoration:'none'}}>
                <h1 onClick={() => setFooterStatus({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''})}>CINEFLEX</h1>
            </Link>     
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: calc(100vw/2 - width/2);
    z-index: 1;

    h1 {
        color: #e8833a;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }
`
