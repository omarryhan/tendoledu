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
  color:black;
`;

const CardsContainer = styled.div`
display:flex;
flex-wrap:wrap;
`;

const CardsOuterContainer = styled.div`
  margin-bottom:60px;
`;

const TheTeamContainer = ({ cards }) => (
  <OuterContainer>
    <Title>
      The Team
    </Title>
    <CardsOuterContainer>
      <CardsContainer>
        {cards.map(card => card)}
      </CardsContainer>
    </CardsOuterContainer>
  </OuterContainer>
);

TheTeamContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TheTeamContainer;
