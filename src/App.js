import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 20px;
`;

export const Heading = styled.h1`
    font-size: 3em;
    margin-bottom: 20px;
`;

export const NavButton = styled.button`
    background-color: #A53860;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        background-color: #DA627D;
    }
`;
