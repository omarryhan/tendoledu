import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${[
        'Ubuntu',
        'Raleway',
        'Montserrat',
        'medium-content-sans-serif-font',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
    ].join(',')};
}

html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

html body {
    max-width: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
    width: 0.5vw;
    height: 1vh;
}
  
/* Track */
::-webkit-scrollbar-track {
    box-shadow: gray; 
}
  
/* Handle */
::-webkit-scrollbar-thumb {
    background: red; 
    border-radius: 5vh;
}
`;
