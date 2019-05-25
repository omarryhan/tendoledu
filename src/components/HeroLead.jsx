import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeadContainer = styled.div`

`;

const LeadMessage = styled.p`

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
