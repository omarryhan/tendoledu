import styled from 'styled-components';
import {
    media,
  } from '../constants';


export default styled.h2`
    ${media.greaterThan('laptop')`
        margin-left: 10vw;
    `}

    ${media.lessThan('laptop')`
        text-align: center;
    `}
`;
