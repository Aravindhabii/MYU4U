import styled, { keyframes } from "styled-components";
import { color, font } from "../../utilities";
import image from "../../assets/image3.jpg";

export const Rightcontainer = styled.div`
  position: relative;
  height: 100vh;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  /* background: red; */
  margin-top: 5rem;
`;
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
  color: ${color.three};
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
  background: ${color.one};
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
  height: 50vh;
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
    justify-content: flex-start;
    overflow: hidden;
    p{

    }
    img{
      position: relative;
      height: 100%;
      width: 40%;
      margin-right: 20px;
    }
`