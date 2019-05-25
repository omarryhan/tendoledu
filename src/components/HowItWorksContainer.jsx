import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterContainer = styled.div`

`;

const Title = styled.h2`

`;

const SubTextContainer = styled.div`

`;

const SubText = styled.p`

`;

const CardsContainer = styled.div`
    display: flex;
`;

const HowItWorksContainer = ({ cards, subText }) => (
  <OuterContainer>
    <Title>
        How it works
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
