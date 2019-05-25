import styled from 'styled-components';
import { media } from '../constants';


export default styled.h1`
    ${media.lessThan('laptop')`
        font-size: 3em;
    `};

    ${media.lessThan('tablet')`
        font-size: 2em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1.5em;
    `};

    font-size: 4em;
    text-align: center;
`;
