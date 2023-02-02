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
  const [randno, setrandno] = useState(0)

  useEffect(() => {
    const fetchdata = async ()=>{
      await happyhits().then((res)=>{
        setData(res.data)
        setrandno(Math.floor(Math.random() * res.data.length))
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    fetchdata();
  }, []);


  if (!data) return <div>Loading...</div>;
  return (
    <Rightcontainer>
      <Wrapper>
        <Head />
        <Poster data = {data} randno = {randno}/>
        <Cards data = {data} title="Good Morning" />
        <Discover data = {data} title = "Trending"/>
      </Wrapper>
    </Rightcontainer>
  );
};

export default Home;
