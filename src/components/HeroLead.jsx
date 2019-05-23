import React from 'react';
import styled from 'styled-components';

const LeadContainer = styled.div`

`;

const LeadMessage = styled.p`

`;

export default ({ message }) => (
  <LeadContainer>
    <LeadMessage>
      {message}
    </LeadMessage>
  </LeadContainer>
);
