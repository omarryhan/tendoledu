import styled from 'styled-components';
import { media } from '../constants';


export default styled.h1`
    font-size: 3em;
    font-weight:bold;

    ${media.lessThan('laptop')`
        font-size: 1.7em;
    `};

    ${media.lessThan('tablet')`
        font-size: 1.4em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1.3em;
    `};

    text-align: left;
    margin-top: 1vh;
    margin-bottom: 1vh;
    color:white;
`;
