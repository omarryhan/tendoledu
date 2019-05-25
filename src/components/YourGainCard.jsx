import React from 'react';
import PropTypes from 'prop-types';
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
