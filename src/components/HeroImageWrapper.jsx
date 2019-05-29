import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';


const Container = styled.div`
  margin: 0 20vw;

  ${media.lessThan('laptop')`
    margin: 0 10vw;
  `};

  ${media.lessThan('tablet')`
    margin: 0 5vw;
  `};

  ${media.lessThan('mobileMedium')`
    margin: 0 2.5vw;
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
