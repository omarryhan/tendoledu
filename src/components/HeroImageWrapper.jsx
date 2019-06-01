import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';


const Container = styled.div`
  margin: 0 auto;
  text-align: center;

  ${media.greaterThan('laptop')`
    width: 50vw;
  `};

  ${media.lessThan('laptop')`
    width: 60vw;
  `};

  ${media.lessThan('tablet')`
    width: 80vw;
  `};

  ${media.lessThan('mobileMedium')`
    width: 90vw;
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
