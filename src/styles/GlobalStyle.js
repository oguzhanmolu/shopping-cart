import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
    i{
        cursor:pointer;
    }
}`;

export default GlobalStyle;
