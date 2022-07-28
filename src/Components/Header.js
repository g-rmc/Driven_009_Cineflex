import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return(
        
        <Container>
            <Link to="/" style={{textDecoration:'none'}}>
                <h1>CINEFLEX</h1>
            </Link>     
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;

    h1 {
        color: #e8833a;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }
`
