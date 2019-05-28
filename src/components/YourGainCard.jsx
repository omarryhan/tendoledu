import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Outline = styled.div`
width: 350px;
min-height:400px;
margin: 0 auto;
margin-bottom: 5vh;
background-color:white;
text-align:center;
padding:30px;
border-radius:10px;
box-shadow: 0px 2px 36px -5px rgba(0,0,0,0.37);
`;

const LogoContainer = styled.div`
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
`;

const YourGainCard = ({
 logo, title, subtitle, text,
}) => (
  <Outline>
    <TitleContainer>
      <TitleText>
        {title}
      </TitleText>
    </TitleContainer>

    <LogoContainer>
      {logo}
    </LogoContainer>

    <SubTitleText>
      {subtitle}
    </SubTitleText>

    <TextContainer>
      <Text>
        {text}
      </Text>
    </TextContainer>
  </Outline>
);

YourGainCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default YourGainCard;
