import styled from 'styled-components';
import { FONT_SIZES, media } from '../constants';


export default styled.h1`
    ${FONT_SIZES.xxxxl}

    font-weight:bold;
    text-align: left;
    margin: 5px 0 5px 0;

    color: ${props => props.color};

    ${media.lessThan('tablet')`
        text-align: center;
    `};
`;
