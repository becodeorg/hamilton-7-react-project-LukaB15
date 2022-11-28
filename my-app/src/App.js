import React from "react";
import Home from "./features/Home";
import "./App.css";
import {Route, Routes} from "react-router";
import Game from "./pages/Game";
import Formfilter from "./features/Formfilter";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/Game/:id"} element={<Game authed={true} />} />
                <Route path={"/Formfilter"} element={<Formfilter />} />
            </Routes>
        </>
    );
}

export default App;
