import styled from "styled-components";
import boldBerry from "../../utils/colors";

export const Container = styled.div`
    position: absolute;
`;

export const Image = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Heading = styled.h1`
    font-size: 7vw;
    color: ${boldBerry.primary};
    background-color: ${boldBerry.background};
    padding: 0 20px;
    cursor: pointer;
`;

export const BlinkAnimation = styled.span`
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }

    animation: blink 2s infinite;
`;