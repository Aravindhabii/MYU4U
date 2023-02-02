import React from "react";
import { Rightcontainer, Wrapper } from "../../containers/home/right.style";
import Poster from "../../containers/home/Poster";
import Cards from "../../containers/home/Cards";
import Head from "../../containers/home/Head";
import Discover from "../../containers/home/Discover";
import { useState,useEffect } from "react";
import { happyhits } from "../../axios/songs.axios";
const Home = () => {

  const [data, setData] = useState(null);



  useEffect(() => {
    const fetchdata = async ()=>{
      await happyhits().then((res)=>{
        setData(res.data)
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    fetchdata();
  }, []);
  

  
  return (
    <Rightcontainer>
      <Wrapper>
        <Head />
        <Poster />
        <Cards title="Good Morning" />
        <Discover title = "Trending"/>
      </Wrapper>
    </Rightcontainer>
  );
};

export default Home;
