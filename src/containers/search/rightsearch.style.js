import styled from "styled-components";
import { color, font, random } from "../../utilities";

export const Search = styled.div`
  position: relative;
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .inputicon {
    position: absolute;
    font-size: 1rem;
    z-index: 2;
    font-size: 1.5rem;
    width: 1.7rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 3%;
    color: ${color.two};
  }
  span {
    position: relative;
    width: 40%;
    height: 3rem;
  }
  .result {
    position: relative;
    height: auto;
    width: 40%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.5rem;
    overflow: hidden;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  background: ${color.three};
  color: ${color.two};
  padding: 0 1.5rem 0 12%;
  border-radius: 3rem;
  font-family: "Oxygen", sans-serif;
`;

export const Blocks = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;
  padding: 0 12%;
  background: ${color.three};
  color: ${color.two};
  font-family: "Oxygen", sans-serif;
  /* margin-bottom: 1px; */
  &:hover {
    background: ${color.four};
    cursor: pointer;
  }
`;

export const SearchResult = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  margin-top: 4%;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  background: #000;
  .left {
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
  }
  .right {
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
  }
`;

export const TopResult = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    position: relative;
    height: 40%;
    width: 40%;
    top: 5%;
    left: 5%;
    border-radius: 20px;
  }
  h1 {
    position: relative;
    font-size: ${font.two};
    width: 90%;
    color: ${color.two};
    font-family: "Oxygen", sans-serif;
    overflow: hidden;
    text-overflow: ellipsis ellipsis;
    left: 5%;

  }
  h2 {
    position: relative;
    font-size: ${font.two};
    color: ${color.two};
    font-family: "Oxygen", sans-serif;
    left: 5%;

  }
`;

export const RecentSearch = styled.div``;

export const Browsercont = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .bottom {
    position: relative;
    width: 100%;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, 15rem);
    align-items: center;
    justify-content: center;
    grid-row-gap: 2rem;
  }
`;
export const Browsercard = styled.div`
  position: relative;
  width: 13rem;
  height: 25vh;
  border-radius: 20px;
  align-self: center;
  background: ${(props) => props.color || "palevioletred"};
  justify-self: center;
  display: flex;
  padding: 10% 0 0 5%;

  img {
    width: 50%;
    height: 50%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`;
