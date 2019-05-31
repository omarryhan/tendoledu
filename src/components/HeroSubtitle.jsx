import styled from 'styled-components';
import { FONT_SIZES, media, COLOR_PALETTE } from '../constants';

export default styled.h2`
    ${FONT_SIZES.xl}

    text-align: left;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;

    color: ${COLOR_PALETTE.black.primary()};

    ${media.lessThan('tablet')`
        text-align: center;
    `};
`;
