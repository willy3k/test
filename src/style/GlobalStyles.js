import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.primaryColorBackgroudFundoBody};
}

html, body, #root {
  height: 100%;
}

button{
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;
}

button:hover {
filter: brightness(85%);
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: white;
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  margin: 217px auto 172px auto;
  border-radius: 4px;

  @media (max-width: 600px) {
    margin: 120px auto 45px auto;
  } ;
`;
