import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterContainer = styled.div`

`;

const Title = styled.h2`
  text-align: center;
  margin: 8vh 0 8vh 0;
  font-size: 2.5em;
  color:white;
`;

const SubTextContainer = styled.div`
  text-align: center;
  margin: 10vh 0 3vh 0;
  color:white;
`;

export const SubText = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

const CardsContainer = styled.div`
display:flex;
flex-wrap:wrap;
`;

const CardsOuterContainer = styled.div`

`;

const YourGainContainer = ({ cards, subText }) => (
  <OuterContainer>
    <Title>
        Your Students Gain
    </Title>
    <CardsOuterContainer>
      <CardsContainer>
        {cards.map(card => card)}
      </CardsContainer>
    </CardsOuterContainer>
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
