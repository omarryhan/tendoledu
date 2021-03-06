import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FONT_SIZES, media } from '../constants';

const OuterContainer = styled.div`
  margin-bottom: 80px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 70px 0 70px 0;
  ${FONT_SIZES.xxxxxl}
  color: ${props => props.color};
`;

const SubTextContainer = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const SubText = styled.p`
  font-weight: bold;
  ${FONT_SIZES.xxl}
  color: ${props => props.color};

  ${media.greaterThan('tablet')`
    width: 55%;
  `};

  ${media.lessThan('tablet')`
    width: 90%;
  `};

  margin: 0 auto;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
`;

const HowItWorksContainer = ({ cards, subText, color }) => (
  <OuterContainer>
    <Title color={color}>
        How it Works
    </Title>

    <CardsContainer>
      {cards.map(card => card)}
    </CardsContainer>

    <SubTextContainer>
      <SubText color={color}>
        {subText}
      </SubText>
    </SubTextContainer>
  </OuterContainer>
);

HowItWorksContainer.defaultProps = {
  subText: null,
  color: 'inherit',
};

HowItWorksContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
  subText: PropTypes.string,
  color: PropTypes.string,
};

export default HowItWorksContainer;
