import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';


const Outline = styled.div`
  width: 500px;
  margin: 0;
  margin-left:80px;
  margin-right:80px;
  display: inline-block;
    ${media.lessThan('1454px')`
    display:none;
  `};
`;

const ContentContainer = styled.div`

`;

const LogoContainer = styled.div`
    img {
        transform: translateX(-280px);
        ${media.lessThan('1814px')`
            transform: translateX(-258px);
        `};
        ${media.lessThan('1742px')`
            transform: translateX(-223px);
        `};
        ${media.lessThan('1652px')`
            transform: translateX(-176px);
        `};
        ${media.lessThan('1576px')`
            transform: translateX(-134px);
        `};
        ${media.lessThan('1500px')`
            transform: translateX(-87px);
        `};
    }
`;

const HowItWorksArrow = ({
 img,
}) => (
  <Outline>
    <ContentContainer>
      <LogoContainer>
        {img}
      </LogoContainer>
    </ContentContainer>
  </Outline>
);

HowItWorksArrow.propTypes = {
    img: PropTypes.element.isRequired,
};

export default HowItWorksArrow;
