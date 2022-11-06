import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Left from "./containers/left/Left";
import Scan from "./components/scan/Scan";
import { HomeContainer } from "./components/home/home.style";
import Mplayer from "./containers/player/Mplayer";


function App() {

  return (
    <>
      <Router>
        <HomeContainer>
          <Left />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/create" element={<Mplayer />} />
                <Route path="*" element={<div>404</div>} />
          </Routes>
        </HomeContainer>
          <Mplayer />
      </Router>
    </>
  );
}

export default App;