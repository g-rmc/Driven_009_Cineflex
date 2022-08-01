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

    const [footerStatus, setFooterStatus] = useState({show: false, title: '', posterURL: '', weekday: '', date: '', time: ''});
    const [selected, setSelected] = useState({ids: [], seats:[], name:'', cpf:''});

    return(
        <Container>
            <BrowserRouter>  
                
                <Header setFooterStatus={setFooterStatus}/>

                <Routes>

                    <Route path="/" element={<Movies
                                                footerStatus={footerStatus}
                                                />} />

                    <Route path="/sessoes/:idFilme" element={<Sessions 
                                                                setFooterStatus={setFooterStatus} 
                                                                footerStatus={footerStatus}
                                                                />} />

                    <Route path="/assentos/:idSessao" element={<Seats 
                                                                setFooterStatus={setFooterStatus}
                                                                footerStatus={footerStatus}
                                                                selected={selected}
                                                                setSelected={setSelected}
                                                                />} />
                                                                
                    <Route path="/sucesso" element={<End 
                                                        setFooterStatus={setFooterStatus}
                                                        footerStatus={footerStatus}
                                                        selected={selected}
                                                        />} />

                </Routes>

                <Footer footerStatus={footerStatus}/>

            </BrowserRouter>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f3f3f3;
    height: 100%;
    min-height: 100vh;
    min-width: 300px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 67px;
    padding-bottom: 117px;
`