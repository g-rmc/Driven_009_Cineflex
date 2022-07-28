import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Movies from "./Content/Movies";
import Sessions from "./Content/Sessions";
import Seats from "./Content/Seats";
import End from "./Content/End";
import Footer from "./Footer";

export default function App(){

    const [footerStatus, setFooterStatus] = useState({show: false});

    return(
        <Container>
            <BrowserRouter>  
                
                <Header setFooterStatus={setFooterStatus}/>

                <Routes>

                    <Route path="/" element={<Movies />} />
                    <Route path="/sessoes/:idFilme" element={<Sessions setFooterStatus={setFooterStatus}/>} />
                    <Route path="/assentos/:idSessao" element={<Seats setFooterStatus={setFooterStatus}/>} />
                    <Route path="/sucesso" element={<End setFooterStatus={setFooterStatus}/>} />

                </Routes>

                <Footer footerStatus={footerStatus}/>

            </BrowserRouter>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f3f3f3;
    width: 100vw;
    max-width: 600px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 67px;
`