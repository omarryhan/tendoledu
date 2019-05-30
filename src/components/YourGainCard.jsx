import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FONT_SIZES, COLOR_PALETTE } from '../constants';

const Outline = styled.div`
  width: 350px;

  height: 550px;

  margin: 0 auto;
  margin-bottom: 5vh;
  margin-right: 2vw;
  margin-left : 2vw;
  padding: 1%;

  background-color: white;
  box-shadow: 0px 2px 36px -5px rgba(0,0,0,0.37);

  border-radius: 10px;
`;

const LogoContainer = styled.div`
  height: 50%;
  padding: 2vh 0;

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

const SubTitleTextContainer = styled.div`
  height: 30%;
  width: 90%;
  margin: 0 auto;
  line-height: 2em;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
`;

const TitleText = styled.strong`
  font-weight: bold;
  ${FONT_SIZES.xl}
  text-transform: uppercase;

  color: ${COLOR_PALETTE.red.primary()};
`;

const SubTitleText = styled.p`
  ${FONT_SIZES.lg}
`;


const YourGainCard = ({
 logo, title, subtitle,
}) => (
  <Outline>
    <LogoContainer>
      {logo}
    </LogoContainer>

    <TitleContainer>
      <TitleText>
        {title}
      </TitleText>
    </TitleContainer>


    <SubTitleTextContainer>
      <SubTitleText>
        {subtitle}
      </SubTitleText>
    </SubTitleTextContainer>
  </Outline>
);

YourGainCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default YourGainCard;
