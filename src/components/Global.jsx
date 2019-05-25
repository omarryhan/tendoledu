import { createGlobalStyle } from 'styled-components';
import { COLOR_PALETTE } from '../constants';

export default createGlobalStyle`
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${[
        'Ubuntu Medium',
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
    box-shadow: ${COLOR_PALETTE.black.primary}; 
}
  
/* Handle */
::-webkit-scrollbar-thumb {
    background: ${COLOR_PALETTE.cyan.primary}; 
    border-radius: 5vh;
}
`;
