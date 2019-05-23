import React from 'react';
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

export default ({ cards, subText }) => (
  <OuterContainer>
    <Title>
        Your Students Gain
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
