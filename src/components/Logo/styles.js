import styled, { keyframes } from "styled-components";

export const Heading = styled.h1`
    font-size: 5em;
    font-family: 'Rubik Bubbles', system-ui;
    margin: 0;

    @media (prefers-reduced-motion: no-preference) {
    animation: ${(props) => (props.spin ? Spin : "none")} infinite 20s linear;
    }
`;

export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;