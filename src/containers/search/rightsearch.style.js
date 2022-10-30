import styled from "styled-components";
import { color, font } from "../../utilities";

export const Search = styled.div`
    position: relative;
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
        display: flex;
        flex-direction: column;
        align-items: center;

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
    color: ${color.one};
    padding: 0 1.5rem 0 3.3rem;
    border-radius: 3rem;
    font-family: 'Oxygen',sans-serif;
`

export const Blocks = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    background: ${color.three};
    color: ${color.one};
    margin-bottom: 1px;
`

export const RecentSearch = styled.div`

`