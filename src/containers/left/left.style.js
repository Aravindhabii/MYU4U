import styled from "styled-components";
import { color, font } from "../../utilities";
// const color1 = '#1D2036';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  background: ${color.three};
  border-radius: 0% 20px 20px 0%;
`;

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  font-family: 'Roboto', sans-serif;
  display: flex;
  color: ${color.two};
  justify-content: center;
  align-items: center;
  font-size: ${font.one};
  font-weight: 900;
`;

export const Sidebarcont = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  .content {
    position: relative;
    width: 85%;
    height: 20%;
    background: ${color.one};
    border-radius: 20px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.1s ease-in-out;
    text-decoration: none;
    color: ${color.two};
  }
  .content:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 100%;
    top: -18px;
    background: transparent;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    border-bottom-right-radius: 20px;
    box-shadow: 7px 3px 0 0 ${color.one};
    transition: all 0.1s ease-in-out;

  }
  .content:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 100%;
    bottom: -18px;
    color: ${color.four};
    background: transparent;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    border-top-right-radius: 20px;
    box-shadow: 7px -3px 0 0 ${color.one};
    transition:all 0.1s ease-in-out;

  }
  .content2{
    position: relative;
    width: 85%;
    height: 20%;
    background: ${color.three};
    color: ${color.two};
    border-radius: 20px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.1s ease-in-out;
    text-decoration: none;
  }
  .content:hover{
    cursor: pointer;
  }
`;

export const Sidebarconttwo = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  .content {
    position: relative;
    width: 85%;
    height: 20%;
    background: ${color.one};
    border-radius: 20px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.1s ease-in-out;
    text-decoration: none;
    color: ${color.two};
  }
  .content:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 100%;
    top: -18px;
    background: transparent;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    border-bottom-right-radius: 20px;
    box-shadow: 7px 3px 0 0 ${color.one};
    transition: all 0.1s ease-in-out;

  }
  .content:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 100%;
    bottom: -18px;
    color: ${color.four};
    background: transparent;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    border-top-right-radius: 20px;
    box-shadow: 7px -3px 0 0 ${color.one};
    transition:all 0.1s ease-in-out;

  }
  .content2{
    position: relative;
    width: 85%;
    height: 20%;
    background: ${color.three};
    color: ${color.two};
    border-radius: 20px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.1s ease-in-out;
    text-decoration: none;
  }
  .content:hover{
    cursor: pointer;
  }
`;

export const Head1 = styled.h1`
    font-size: ${font.two};
    font-family: 'Roboto', sans-serif;
    pointer-events: none;
    .icon{
        font-size: 18px;
        margin-right: 8px;
    }
`
export const Head2 = styled.h1`
    font-size: ${font.three};
    font-family: 'Roboto',sans-serif;
    color: ${color.two};
    width: 100%;
    padding-left: 20px;
    
`

