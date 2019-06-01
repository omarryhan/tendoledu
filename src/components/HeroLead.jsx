import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZES, media, COLOR_PALETTE } from '../constants';

const LeadContainer = styled.div`
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

const LeadMessage = styled.p`
  text-align: center;
  ${FONT_SIZES.xxl}

  color: ${COLOR_PALETTE.black.primary()};
`;
const HeroLead = ({ message }) => (
  <LeadContainer>
    <LeadMessage>
      {message}
    </LeadMessage>
  </LeadContainer>
);

HeroLead.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HeroLead;
