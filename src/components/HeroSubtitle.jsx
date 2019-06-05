import styled from 'styled-components';
import { FONT_SIZES, media } from '../constants';

export default styled.h2`
    ${FONT_SIZES.xxl}

    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;

    color: ${props => props.color};

    ${media.lessThan('tablet')`
        text-align: center;
    `};
`;
