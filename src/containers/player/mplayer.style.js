import styled from "styled-components";
import { color, font } from "../../utilities";

export const Mcontainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 100%;
    background: ${color.three};
    .audioplayer{
        background: #000;
    }
`