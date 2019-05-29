import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';


const Container = styled.div`
  margin: 0 20vw;

  ${media.lessThan('laptopLarge')`
    margin: 0 0;
  `};
`;


const HeroImageWrapper = ({
    children,
}) => (
  <Container>
    {children}
  </Container>
);

HeroImageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeroImageWrapper;
