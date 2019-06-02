import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';

import { COLOR_PALETTE, FONT_SIZES } from '../constants';


const Outline = styled.div`
  width: 255px;

  height: 430px;

  margin: 0 auto;
  margin-bottom: 5vh;
  margin-right: 1vw;
  margin-left : 1vw;
  padding: 1%;

  background-color: ${props => props.backgroundColor};
  box-shadow: 0px 2px 36px -5px ${COLOR_PALETTE.black.primary(0.5)};

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
  height: 20%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainTextContainer = styled.div`
  height: 30%;
  margin: 0 auto;
  padding-top: 3vh;

  display: flex;
  align-items: flex-start;
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
  color: ${props => props.color};
`;

export const MainText = styled.strong`
  ${FONT_SIZES.lg}
  font-weight: lighter;
  margin: 0 0;
`;

const SubText = styled.strong`
  font-style: italic;
  font-weight: 0;
`;

const HowItWorksCard = ({
 logo, title, mainText, subText,
}) => {
  const theme = useTheme();
  return (
    <Outline
      backgroundColor={theme.palette.white.main}
    >
      <LogoContainer>
        {logo}
      </LogoContainer>

      <TitleContainer>
        <Title color={theme.palette.secondary.main}>
          {title}
        </Title>
      </TitleContainer>

      <MainTextContainer>
        {mainText}
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
};

HowItWorksCard.defaultProps = {
  subText: null,
};

HowItWorksCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  mainText: PropTypes.element.isRequired,
  subText: PropTypes.string,
};

export default HowItWorksCard;
