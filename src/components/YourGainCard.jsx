import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Outline = styled.div`
width: 250px;
margin: 0 auto;
`;

const LogoContainer = styled.div`

`;

const TitleContainer = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const TitleText = styled.strong`
  font-weight: bold;
`;

const Text = styled.p`

`;

const YourGainCard = ({ logo, title, text }) => (
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

YourGainCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default YourGainCard;
