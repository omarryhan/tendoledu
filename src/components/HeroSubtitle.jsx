import styled from 'styled-components';
import { media } from '../constants';

export default styled.h2`
    font-size: 2em;
    font-weight:lighter;

    ${media.lessThan('laptop')`
        font-size: 1.2em;
    `};

    ${media.lessThan('tablet')`
        font-size: 1.1em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1.1em;
    `};

    text-align: left;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
    color:white;
`;
