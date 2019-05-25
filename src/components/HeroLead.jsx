import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeadContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const LeadMessage = styled.p`
  text-align: center;
  font-size: 2em;
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
