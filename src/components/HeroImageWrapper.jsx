import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';


const Container = styled.div`
  ${media.lessThan('tablet')`
    margin:15px;
  `};
  ${media.lessThan('laptop')`
  margin-left:10%;
  margin-right:10%;
`};
  margin-left:30%;
  margin-right:30%;
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
