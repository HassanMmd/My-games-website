import { Route, Routes, Link, useLocation } from "react-router-dom";
import Bounicing from "./game-description/Bounicing"
import Ballon from "./game-description/Ballon"
import Monkey from "./game-description/Monkey"
import Caveman from "./game-description/Caveman"
import React from "react"
import AllGames from "./game-description/AllGames"
import "./GamesList.css"

function GamesList() {
    let use = useLocation();
    console.log(use)
    return (
        <div>
            <nav className="games-navbar">
                <Link to="/" className="nav-item">All Games</Link>
                <Link to="Bouncing" className="nav-item">Bouncing Orb</Link>
                <Link to="Ballon" className="nav-item">Ballon</Link>
                <Link to="Monkey" className="nav-item">Monkey</Link>
                <Link to="Caveman" className="nav-item">Caveman</Link>
            </nav>
            <Routes>
                <Route path="/" element={<AllGames />}></Route>
                <Route path="/Bouncing" element={<Bounicing />}></Route>
                <Route path="/Ballon" element={<Ballon />}></Route>
                <Route path="Monkey" element={<Monkey />}></Route>
                <Route path="Caveman" element={<Caveman />}></Route>
            </Routes>
        </div>
    );
}

export default GamesList;