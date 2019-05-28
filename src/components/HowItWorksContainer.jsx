import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';

const OuterContainer = styled.div`
`;

const Title = styled.h2`
  text-align: center;
  margin: 1vh 0 1vh 0;
  font-size: 2.5em;
  ${media.lessThan('tablet')`
    font-size:3em;
  `};
`;

const SubTextContainer = styled.div`
  text-align: center;
  margin: 10vh 0 3vh 0;
`;

const SubText = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const HowItWorksContainer = ({ cards, subText }) => (
  <OuterContainer>
    <Title>
        How It Works
    </Title>

    <CardsContainer>
      {cards.map(card => card)}
    </CardsContainer>

    <SubTextContainer>
      <SubText>
        {subText}
      </SubText>
    </SubTextContainer>
  </OuterContainer>
);

HowItWorksContainer.defaultProps = {
  subText: null,
};

HowItWorksContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
  subText: PropTypes.string,
};

export default HowItWorksContainer;
