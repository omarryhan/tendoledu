import styled from 'styled-components';
import { FONT_SIZES, media } from '../constants';


export const LeadContainer = styled.div`
  width: 80%;
  font-weight:lighter;

  ${media.lessThan('laptop')`
    width: 90%;
  `};

  ${media.lessThan('tablet')`
    width: 100%;
  `};
  
  margin: 0 auto;
`;

export const LeadMessage = styled.p`
  text-align: center;
  ${FONT_SIZES.xxl}

  color: ${props => props.color};
`;
