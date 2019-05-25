import styled from 'styled-components';
import { media } from '../constants';


export default styled.h1`
    ${media.lessThan('laptop')`
        font-size: 2.5em;
    `};

    ${media.lessThan('tablet')`
        font-size: 1.5em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1em;
    `};

    font-size: 3.5em;
    text-align: center;
    margin-top: 1vh;
    margin-bottom: 1vh;
`;
