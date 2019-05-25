import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterContainer = styled.div`

`;

const Title = styled.h2`
  text-align: center;
  margin: 8vh 0 8vh 0;
`;

const SubTextContainer = styled.div`

`;

export const SubText = styled.p`
font-weight: bold;
`;

const CardsContainer = styled.div`
    display: flex;
`;

const YourGainContainer = ({ cards, subText }) => (
  <OuterContainer>
    <Title>
        Your Students Gain
    </Title>

    <CardsContainer>
      {cards.map(card => card)}
    </CardsContainer>

    <SubTextContainer>
      {subText}
    </SubTextContainer>
  </OuterContainer>
);

YourGainContainer.defaultProps = {
  subText: null,
};

YourGainContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
  subText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default YourGainContainer;
