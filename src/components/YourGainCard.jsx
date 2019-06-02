import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';

import { FONT_SIZES } from '../constants';

const Outline = styled.div`
  width: 400px;

  height: 600px;

  margin: 0 auto;
  margin-bottom: 5vh;
  margin-right: 2vw;
  margin-left : 2vw;
  padding: 1%;

  box-shadow: 0px 2px 36px -5px rgba(0, 0, 0, 0.6);

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
  height: 40%;
  width: 90%;
  margin: 0 auto;
  line-height: 2em;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TitleText = styled.strong`
  font-weight: bold;
  ${FONT_SIZES.xl}
  text-transform: uppercase;
  
  color: ${props => props.color}
`;

export const SubTitleText = styled.p`
  ${FONT_SIZES.lg}
  margin: 0 0;
`;


const YourGainCard = ({
 logo, title, text,
}) => {
  const theme = useTheme();
  return (
    <Outline>
      <LogoContainer>
        {logo}
      </LogoContainer>

      <TitleContainer>
        <TitleText color={theme.palette.secondary.main}>
          {title}
        </TitleText>
      </TitleContainer>

      <SubTitleTextContainer>
        {text}
      </SubTitleTextContainer>
    </Outline>
  );
};

YourGainCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.element.isRequired,
};

export default YourGainCard;
