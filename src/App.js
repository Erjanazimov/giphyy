import React from 'react';
import Navbar from "./components/navbar/Navbar";
import "./global.css";
import Trending from "./components/ScrollTrending/Trending";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollRandom from "./components/scrollRandom/ScrollRandom";

const App = () => {
    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={ <Trending/>}/>
                    <Route path="/random" exact element={ <ScrollRandom/>}/>
                </Routes>
            </BrowserRouter>,

            <ToastContainer/>
        </>
    );
};

export default App;