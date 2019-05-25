import styled from 'styled-components';
import { media } from '../constants';

export default styled.h2`
    ${media.lessThan('laptop')`
        font-size: 2em;
    `};

    ${media.lessThan('tablet')`
        font-size: 1.5em;
    `};

    ${media.lessThan('mobileMedium')`
        font-size: 1.5em;
    `};

    text-align: center;
`;
