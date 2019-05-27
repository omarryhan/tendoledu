import styled from 'styled-components';
import { media } from '../constants';


export default styled.h1`
    font-size: 4em;
    font-weight:bold;

    ${media.lessThan('laptop')`
        font-size: 2.7em;
    `};

    ${media.lessThan('tablet')`
        font-size: 2.2em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1.8em;
    `};

    text-align: left;
    margin-top: 1vh;
    margin-bottom: 1vh;
    color:white;
`;
