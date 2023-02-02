import styled, { keyframes } from "styled-components";
import { color, font } from "../../utilities";
import image from "../../assets/image3.jpg";

export const Rightcontainer = styled.div`
  position: relative;
  height: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin-bottom: 5vh;
  /* background: red; */
`;
export const Heading = styled.div`
  position: relative;
  width: 100%;
  height: 7vh;
  font-size: ${font.one};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .setting{
    margin-left: 2%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${color.three};
    color: ${color.two};
    border-radius: 30px;
    padding: 0 20px;
    text-transform: uppercase;
  }
`

export const Postercontainer = styled.div.attrs({
  className: "poster",
})`
  position: relative;
  width: 100%;
  height: 40vh;
  background: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  -webkit-box-shadow: 16px 19px 10px -8px rgba(0,0,0,0.27);
-moz-box-shadow: 16px 19px 10px -8px rgba(0,0,0,0.27);
box-shadow: 16px 19px 10px -8px rgba(0,0,0,0.27);

  .left {
    position: relative;
    height: 70%;
    width: 45%;
    /* background: red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    z-index: 2;
  }
  .right {
    position: relative;
    height: 100%;
    width: 45%;
    /* background: white; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
  }
  .shutter {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
  }
`;
export const Head1 = styled.h1`
  position: relative;
  font-size: ${font.three};
  font-family: "Roboto", sans-serif;
  color: ${color.two};
`;

export const Head2 = styled.h1`
  font-size: ${font.four};
  font-family: "Roboto", sans-serif;
  color: ${color.two};
  font-weight: 900;
`;
export const Head3 = styled.h1`
  font-size: ${font.one};
  font-family: "Roboto", sans-serif;
  color: ${color.two};
  font-weight: 900;
`;

const puleanimation = keyframes`
    0% {
      @include transform(scale(0.9));
    }
    70% {
      @include transform(scale(1));
      box-shadow: 0 0 0 40px rgba(#5a99d4, 0);
      @include transform(scale(2));

    }
    100% {
      @include transform(scale(0.9));
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
      @include transform(scale(2.5));
    }
`;

export const Button = styled.a`
  text-decoration: none;
  background: ${color.two};
  color: ${color.three};
  font-size: ${font.two};
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  padding: 15px 30px;
  letter-spacing: 1px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(${color.three}, 0.5);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const Button2 = styled.a`
  text-decoration: none;
  border: 2px solid ${color.two};
  color: ${color.two};
  font-size: ${font.two};
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  padding: 15px 30px;
  letter-spacing: 1px;
  border-radius: 30px;
  margin-left: 30px;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(${color.three}, 0.5);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Cardcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
  /* background: ${color.four}; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;

  .bottom{
    position: relative;
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
    position: relative;
    width: 24rem;
    height: 40%;
    background: ${color.three};
    color: ${color.two};
    border-radius: 20px;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    justify-content: flex-start;
    overflow: hidden;
    -webkit-box-shadow: 16px 17px 12px -9px rgb(0 0 0 / 55%);
-moz-box-shadow:  16px 17px 12px -9px rgb(0 0 0 / 55%);
box-shadow: 17px 13px 15px -11px rgb(255 255 255 / 10%);
    p{

    }
    img{
      position: relative;
      height: 100%;
      width: 40%;
      margin-right: 20px;
    }
`

export const DiscoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  
  ::-webkit-scrollbar{
    display: none;
  }
  .bottom{
    position: relative;
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
  justify-content: space-evenly;
  }
`

export const DiscoverCard = styled.div`
  position: relative;
  height: 85%;
  width: 17%;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  transition:all 0.5s ease-in;
  cursor: pointer;


  img{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .carddiv {
    position: relative;
    height: 40%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    flex-direction: column;
  }
  .playbtn{
    position: relative;
    font-size: ${font.five};
    color: ${color.one};
    margin-top: 1rem;
    background: green;
    border-radius: 50%;
  }
  path:nth-child(1){
    background: ${color.three};
    color: green;
    overflow: hidden;
  }
  &:hover .carddiv{
    height: 100%;
    cursor: pointer;
    transition:all 0.5s ease-in;
    font-size: ${font.five};
  }
  &:hover .playbtn{
    font-size: ${font.four};
    transition:all 0.5s ease-in;
  }
`