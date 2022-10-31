import React from "react";
import { Rightcontainer, Wrapper } from "../../containers/home/right.style";
import Poster from "../../containers/home/Poster";
import Cards from "../../containers/home/Cards";
import Head from "../../containers/home/Head";
import Discover from "../../containers/home/Discover";

const Home = () => {
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
