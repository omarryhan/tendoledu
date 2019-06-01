import styled from 'styled-components';
import { FONT_SIZES, media } from '../constants';


export default styled.h1`
    ${FONT_SIZES.xxxxl}

    font-weight:bold;
    text-align: left;
    margin-top: 1vh;
    margin-bottom: 1vh;

    color: ${props => props.color};

    ${media.lessThan('tablet')`
        text-align: center;
    `};
`;
