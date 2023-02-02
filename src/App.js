import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Left from "./containers/left/Left";
import Scan from "./components/scan/Scan";
import { HomeContainer } from "./components/home/home.style";
import Mplayer from "./containers/player/Mplayer";
import { happyhits } from "./axios/songs.axios";

function App() {
  const [curmusic, setcurmusic] = useState()
  const [adata, setAData] = useState(null);

  useEffect(() => {
    const fetchdata = async ()=>{
      await happyhits().then((res)=>{
        setAData(res.data)
        // console.log(res.data,'from data');
        res.data.forEach(element => {
          console.log(element,'elements');
        });
      }).catch((err)=>{
        console.log(err);
      })
    }
    fetchdata();
  }, []);

  return (
    <>
      <Router>
        <HomeContainer>
          <Left />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search Adata = {adata} />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/create" element={<Mplayer />} />
                <Route path="*" element={<div>404 Page not found</div>} />
          </Routes>
        </HomeContainer>
          <Mplayer />
      </Router>
    </>
  );
}

export default App;