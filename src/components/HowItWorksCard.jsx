import React from 'react';
import styled from 'styled-components';


const Outline = styled.div`

`;

const LogoContainer = styled.div`

`;

const MainTextContainer = styled.div`

`;

const SubTextContainer = styled.div`

`;

const MainText = styled.strong`

`;

const SubText = styled.p`

`;

export default ({ logo, mainText, subText }) => (
  <Outline>
    <LogoContainer>
      {logo}
    </LogoContainer>

    <MainTextContainer>
      <MainText>
        {mainText}
      </MainText>
    </MainTextContainer>

    <SubTextContainer>
      <SubText>
        {subText}
      </SubText>
    </SubTextContainer>
  </Outline>
);
