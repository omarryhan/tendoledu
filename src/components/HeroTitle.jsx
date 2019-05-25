import styled from 'styled-components';
import { media } from '../constants';


export default styled.h1`
    font-size: 3.5em;

    ${media.lessThan('laptop')`
        font-size: 3em;
    `};

    ${media.lessThan('tablet')`
        font-size: 2.5em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 2em;
    `};

    text-align: center;
    margin-top: 1vh;
    margin-bottom: 1vh;
`;
