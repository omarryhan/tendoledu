import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FONT_SIZES } from '../constants';

const OuterContainer = styled.div`
  margin-bottom: 80px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 70px 0 70px 0;
  ${FONT_SIZES.xxxxxl}
`;

const SubTextContainer = styled.div`
  text-align: center;
  margin-top: 80px;
`;

export const SubText = styled.p`
  font-weight: bold;
  ${FONT_SIZES.xxl}
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;

const CardsOuterContainer = styled.div`
  
`;

const YourGainContainer = ({ cards, subText, title }) => (
  <OuterContainer>
    <Title>
      {title}
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
  title: PropTypes.string.isRequired,
};

export default YourGainContainer;
