import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Left from "./containers/left/Left";
import { HomeContainer } from "./components/home/home.style";


function App() {

  return (
    <>
      <Router>
        <HomeContainer>
          <Left />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Search />} />
                <Route path="*" element={<div>404</div>} />
          </Routes>
        </HomeContainer>
      </Router>
    </>
  );
}

export default App;