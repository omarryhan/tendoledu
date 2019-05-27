import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';

const OuterContainer = styled.div`
margin: 0px 5% 0px 5%;
`;

const Title = styled.h2`
  text-align: center;
  margin: 8vh 0 8vh 0;
  font-size: 3.5em;
  ${media.lessThan('tablet')`
    font-size:3em;
  `};
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
      What will my Students Gain?
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
