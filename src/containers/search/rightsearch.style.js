import styled from "styled-components";
import { color, font } from "../../utilities";

export const Search = styled.div`
    position: relative;
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .inputicon{
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
    span{
        position: relative;
        width: 40%;
        height:3rem;
    }
    .result{
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
`

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
    font-family: 'Oxygen',sans-serif;
`

export const Blocks = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 2rem;
    padding: 0 12%;
    background: ${color.three};
    color: ${color.two};
    font-family: 'Oxygen', sans-serif;
    /* margin-bottom: 1px; */
`

export const RecentSearch = styled.div`

`

export const Browsercont = styled.div`
    position: relative;
    width: 100%;
    height: 10vh;
    background: #000;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .bottom{
        position: relative;
        display: grid;
        width: 100%;
    }
`

