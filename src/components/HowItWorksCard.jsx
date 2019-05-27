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
  box-shadow: 0px 2px 36px -5px rgba(29, 233, 182, 0.37);
`;

const LogoContainer = styled.div`

`;

const MainTextContainer = styled.div`
  text-align: center;
  margin: 1.5vh 0;
`;

const SubTextContainer = styled.div`
  text-align: center;
`;

const TitleContainer = styled.div`
  text-align:center;
`;

const Title = styled.h2`
  color:#4C72E4;
  text-transform: uppercase;
`;

const MainText = styled.strong`
  font-size:1.5em;
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
