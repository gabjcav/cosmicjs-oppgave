import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        
    }

    html, body {
        height: 100%;
        width: 100%; 
        margin: 0;
        padding: 0;
        background-color: white; 
        
    }

    html {
        font-size: 20px; 
        line-height: 1.5; 
    }

    body {
        font-family: "Lato", sans-serif; 
    }
    img{
        max-width: 100%; 
    }

    a:visited {
        color: black;
        
    }
    nav{
        width: 70%; 
        margin-left: auto;
        margin-right: auto; 
        margin-bottom: 6rem; 
       ul{
           display: flex; 
           flex-direction: row; 
           margin: 0 auto; 
           justify-content: center; 
           align-items: center; 
           list-style: none; 
           font-weight: 500;
           font-size: 25px; 
           li{
               margin-right: 20px; 
                
           }
       }
    }
`;

export default GlobalStyle; 