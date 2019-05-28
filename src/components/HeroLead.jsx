import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';

const LeadContainer = styled.div`
  width: 50%;
  font-weight:lighter;
  color: white;

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
  font-size: 1.5em;

  ${media.lessThan('laptop')`
      font-size: 1.3em;
  `};

  ${media.lessThan('tablet')`
      font-size: 1em;
  `};

  ${media.lessThan('mobileMedium')`
      font-size: 1.15em;
  `};
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
