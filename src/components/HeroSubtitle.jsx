import styled from 'styled-components';
import { media } from '../constants';

export default styled.h2`
    font-size: 1.5em;
    font-weight:lighter;

    ${media.lessThan('laptop')`
        font-size: 1.75em;
    `};

    ${media.lessThan('tablet')`
        font-size: 1.5em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1.25em;
    `};

    text-align: left;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
    color:white;
`;
