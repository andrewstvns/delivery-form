import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    font-family: 'Lato', sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-text-stroke-width: 0;
    -webkit-text-stroke-color: transparent;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 550px;
  background-color: #FFFFFF;
  display: table;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 768px) {
    position: initial;
    top: unset;
    left: unset;
    transform: unset;
  }
`;

export const RightSection = styled.div`
  display: table-cell;
  width: 70%;
  padding: 0 40px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
  }
  padding: 70px 40px;
`;

export const SummarySection = styled.div`
  display: table-cell;
  width: 30%;
  border-left: 1px solid black;
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    border-left: unset;
  }
`;


export default GlobalStyle