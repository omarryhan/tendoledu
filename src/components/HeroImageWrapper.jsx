import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  width: 88%;
  margin: 0 auto;
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
