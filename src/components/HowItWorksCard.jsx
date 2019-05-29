import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_PALETTE, FONT_SIZES } from '../constants';


const Outline = styled.div`
  width: 350px;

  height: 500px;

  margin: 0 auto;
  margin-bottom: 5vh;
  margin-right: 2vw;
  margin-left : 2vw;
  padding: 2%;

  background-color: white;
  box-shadow: 0px 2px 36px -5px rgba(0,0,0,0.37);

  border-radius: 10px;
`;

const LogoContainer = styled.div`
  height: 40%;
  padding: 2vh 0;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  height: 10%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainTextContainer = styled.div`
  height: 40%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SubTextContainer = styled.div`
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: ${COLOR_PALETTE.red.primary()};
`;

const MainText = styled.strong`
  ${FONT_SIZES.lg}
  font-weight: lighter;
`;

const SubText = styled.strong`
  font-style: italic;
  font-weight: 0;
`;

const HowItWorksCard = ({
 logo, title, mainText, subText,
}) => (
  <Outline>
    <LogoContainer>
      {logo}
    </LogoContainer>

    <TitleContainer>
      <Title>
        {title}
      </Title>
    </TitleContainer>

    <MainTextContainer>
      <MainText>
        {mainText}
      </MainText>
    </MainTextContainer>

    {subText
      ? (
        <SubTextContainer>
          <SubText>
            {subText}
          </SubText>
        </SubTextContainer>
        )
      : null
    }
  </Outline>
);

HowItWorksCard.defaultProps = {
  subText: null,
};

HowItWorksCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

export default HowItWorksCard;
