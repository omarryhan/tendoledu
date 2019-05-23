import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
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
}
::-webkit-scrollbar-track {
    box-shadow: gray; 
}
::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarHandleColor}; 
}
`;
