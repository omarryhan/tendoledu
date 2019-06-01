import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import { FONT_SIZES, media } from '../constants';


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

  color: ${props => props.color};
`;

const HeroLead = ({ message }) => {
  const theme = useTheme();
  return (
    <LeadContainer>
      <LeadMessage color={theme.palette.black.main}>
        {message}
      </LeadMessage>
    </LeadContainer>
  );
};

HeroLead.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HeroLead;
