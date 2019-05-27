import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Worker1 from '../images/worker1.jpg';


const Outline = styled.div`
  width: 350px;
  margin: 0 auto;
  text-align:center;
  padding:30px;
`;

const LogoContainer = styled.div`
`;

const ContentContainer = styled.div`
  background-image:url(${Worker1});
  background-size:cover;
  background-position:center;
  padding:40px;
  border-radius:50%;
  box-shadow: 0px 2px 36px -5px rgba(0,0,0,0.37);
  margin-bottom: 2vh;
  width: 100%;
  height:250px;
`;

const TitleContainer = styled.div`
  text-align: center;
  font-weight:lighter;
`;

const TitleText = styled.strong`
  font-weight: bold;
  font-size: 1.5em;
`;

const SubTitleText = styled.h2`
  color:black;
  margin:0px;
  font-weight:lighter;
`;

const TheTeamCard = ({
 logo, title, subtitle,
}) => (
  <Outline>
    <ContentContainer>
      <LogoContainer>
        {logo}
      </LogoContainer>
    </ContentContainer>
    <TitleContainer>
      <TitleText>
        {title}
      </TitleText>
    </TitleContainer>
    <SubTitleText>
      {subtitle}
    </SubTitleText>
  </Outline>
);

TheTeamCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TheTeamCard;
