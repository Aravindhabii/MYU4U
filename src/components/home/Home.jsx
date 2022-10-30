import React from "react";
import { Rightcontainer, Wrapper } from "../../containers/home/right.style";
import Poster from "../../containers/home/Poster";
import Cards from "../../containers/home/Cards";

const Home = () => {
  return (
    <Rightcontainer>
      <Wrapper>
        <Poster />
        <Cards title="Good Morning" />
      </Wrapper>
    </Rightcontainer>
  );
};

export default Home;
