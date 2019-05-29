import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZES, media } from '../constants';

const LeadContainer = styled.div`
  width: 50%;
  font-weight:lighter;

  ${media.lessThan('laptop')`
    width: 70%;
  `};

  ${media.lessThan('tablet')`
    width: 80%;
  `};

  ${media.lessThan('mobileMedium')`
    width: 100%;
  `};
  
  margin: 0 auto;
`;

const LeadMessage = styled.p`
  text-align: center;
  ${FONT_SIZES.xxl}
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
