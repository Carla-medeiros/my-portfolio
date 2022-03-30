import 'antd/dist/antd.min.css';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --background: #FFFFFF;
     --blue-100: #D9F5FD;
     --green-500: #49bf9d;
     --gray-100: #F2F2F2;
     --gray-200: #F9F9F9;
     --gray-300: #e1e1e1;
     --gray-400: #CCCCCC;
     --gray-600: #7E7E7E;
     --gray-650: #8D8D8D;
     --gray-700: #262626;
     --gray-750: #424242;
     --gray-800: #636363;
     --gray-850: #302F2F;
     --gray-900: #0E0E0E;
     --green-500: #2CBB09;
     --white: #ffffff;
     --black: #141414;

 }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;

