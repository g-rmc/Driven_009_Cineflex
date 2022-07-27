import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.css";
import "./style.css";

import Header from "../Header/Header";
import Movies from "../Content/Movies";
import Sessions from "../Content/Sessions";
import Seats from "../Content/Seats";
import End from "../Content/End";
import Footer from "../Footer/Footer";

export default function App(){
    return(
        <div className="app">
            <BrowserRouter>  
                
                <Header />

                <Routes>

                    <Route path="/" element={<Movies />} />
                    <Route path="/filme/00" element={<Sessions />} />
                    <Route path="/sessao/000" element={<Seats />} />
                    <Route path="/sucesso" element={<End />} />

                </Routes>

                <Footer />

            </BrowserRouter>
        </div>
    )
}