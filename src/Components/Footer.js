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
    height: 117px;
    background-color: #dfe6ed;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    left: 0;
`