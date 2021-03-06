import { createGlobalStyle } from 'styled-components';
import { COLOR_PALETTE } from '../constants';


export default createGlobalStyle`
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ${[
        'Ubuntu',
        'Raleway',
        'Montserrat',
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
    width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: ${COLOR_PALETTE.black.primary()};
}

/* Handle */
::-webkit-scrollbar-thumb {
    background-color: ${COLOR_PALETTE.black.primary(1)};
    background-image: linear-gradient(147deg, #333333 0%, #434343 74%);
    border-radius: 30px;
}
`;
