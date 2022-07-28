import styled from "styled-components"

export default function Footer({footerStatus}) {

    if (footerStatus.show === true) {
        return (

            <Container>
                Aqui tem base
            </Container>
    
        )
    }
    
    return (<></>)

}

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 117px;
    background-color: #dfe6ed;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    left: calc(100vw/2 - width/2);
`