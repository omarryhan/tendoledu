import styled from 'styled-components';
import { media } from '../constants';


export default styled.h1`
    font-size: 4.5em;
    font-weight:bold;

    ${media.lessThan('laptop')`
        font-size: 3em;
    `};

    ${media.lessThan('tablet')`
        font-size: 2.5em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 2em;
    `};

    text-align: left;
    margin-top: 1vh;
    margin-bottom: 1vh;
    color:white;
`;
