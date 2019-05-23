import React from 'react';
import styled from 'styled-components';


const Outline = styled.div`

`;

const LogoContainer = styled.div`

`;

const TitleContainer = styled.div`

`;

const TextContainer = styled.div`

`;

const TitleText = styled.strong`

`;

const Text = styled.p`

`;

export default ({ logo, title, text }) => (
  <Outline>
    <TitleContainer>
      <TitleText>
        {title}
      </TitleText>
    </TitleContainer>

    <LogoContainer>
      {logo}
    </LogoContainer>

    <TextContainer>
      <Text>
        {text}
      </Text>
    </TextContainer>
  </Outline>
);
