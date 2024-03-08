import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html, body, #root{
    max-height: 100vh;
  }
  body{
    background: ${colors.baseColor};
    text-align: center;
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    color: #3f4850;
  }

  input{
    font-family: "Roboto", sans;
    width: 10vw;
  }
  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 50%;
  max-height: 100%;
  background: #fff;
  margin: 7% auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
