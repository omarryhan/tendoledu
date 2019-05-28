import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Outline = styled.div`
  width: 350px;
  min-height:500px;
  margin:auto;
  background-color:white;
  text-align:center;
  padding:1vh;
  border-radius:10px;
  box-shadow: 0px 2px 36px -5px rgba(29, 233, 182, 0.37);
  position:relative;
  margin-bottom:20px;
  margin-top:20px;
  display: inline-block;
  margin-right: 20px;
  margin-left: 20px;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 15px;
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
  color:#1DE9B6;
  text-transform: uppercase;
`;

const MainText = styled.strong`
  font-weight: lighter;
  font-size:1.25em;
`;

const SubText = styled.strong`
  font-style: italic;
  font-weight: 0;
`;

const HowItWorksCard = ({
 logo, title, mainText, subText,
}) => (
  <Outline>
    <ContentContainer>
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
    </ContentContainer>
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
