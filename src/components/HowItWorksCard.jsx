import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Outline = styled.div`

`;

const LogoContainer = styled.div`

`;

const MainTextContainer = styled.div`

`;

const SubTextContainer = styled.div`

`;

const MainText = styled.strong`

`;

const SubText = styled.p`

`;

const HowItWorksCard = ({ logo, mainText, subText }) => (
  <Outline>
    <LogoContainer>
      {logo}
    </LogoContainer>

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
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

export default HowItWorksCard;
