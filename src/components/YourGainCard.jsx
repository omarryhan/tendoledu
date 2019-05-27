import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';


const Outline = styled.div`
  width: 500px;
  min-height:600px;
  margin: 0 auto;
  margin-bottom: 5vh;
  background-color:white;
  text-align:center;
  padding:30px;
  border-radius:10px;
  box-shadow: 0px 2px 36px -5px rgba(0,0,0,0.37);
  position:relative;
`;

const LogoContainer = styled.div`
margin-bottom: 17px;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 15px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom:17px;
  
`;

const TextContainer = styled.div`
  text-align: center;
`;

const TitleText = styled.strong`
  font-weight: bold;
  font-size: 1.5em;
`;

const SubTitleText = styled.h2`
  color:#4C72E4;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size:1.5em;
  font-weight: lighter;
  ${media.lessThan('tablet')`
    font-size:1.3em;
  `};
`;

const YourGainCard = ({
 logo, title, subtitle, text,
}) => (
  <Outline>
    <ContentContainer>
      <LogoContainer>
        {logo}
      </LogoContainer>

      <TitleContainer>
        <TitleText>
          {title}
        </TitleText>
        <SubTitleText>
          {subtitle}
        </SubTitleText>
      </TitleContainer>

      <TextContainer>
        <Text>
          {text}
        </Text>
      </TextContainer>
    </ContentContainer>
  </Outline>
);

YourGainCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default YourGainCard;
