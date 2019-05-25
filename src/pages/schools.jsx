import React, { useState } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { SCHOOLS_THEME } from '../constants/index';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import HeroTitle from '../components/HeroTitle';
import HeroSubtitle from '../components/HeroSubtitle';
import HeroLead from '../components/HeroLead';
import HowItWorksContainer from '../components/HowItWorksContainer';
import HowItWorksCard from '../components/HowItWorksCard';
import YourGainContainer, { SubText } from '../components/YourGainContainer';
import YourGainCard from '../components/YourGainCard';
import SignUpModal from '../components/SignUpModal';
import SignUpButtonDiv from '../components/SignUpButtonDiv';
import HeroImageWrapper from '../components/HeroImageWrapper';

import HeroImage from '../images/hero-schools.svg';
import CreateLogo from '../images/create.svg';
import AdmitLogo from '../images/admit.svg';
import SelectLogo from '../images/select.svg';
import DeliverLogo from '../images/deliver.svg';
import WorkLogo from '../images/work.svg';
import RecognitionLogo from '../images/recognition.svg';


const muiTheme = createMuiTheme(SCHOOLS_THEME, 'schoolsTheme');

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Layout currentPage="schools">
        <SEO
          title="Schools"
          description="Take your school to the next level with Tendoledu"
        />
        <SignUpModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          currentPage="schools"
        />
        <Section>
          <HeroTitle> Make Your Online School Different </HeroTitle>
          <HeroSubtitle> Get Your Students Real Work Experience with Tendoledu </HeroSubtitle>
          <HeroImageWrapper>
            <img
              src={HeroImage}
              alt="Has a yellow tube where students enter to learn and when exiting, they start applying for jobs"
            />
          </HeroImageWrapper>
          <HeroLead
            message="It’s really hard to be unique when all online schools do the same thing (only teach)"
          />
          <SignUpButtonDiv
            text="Sign Up Here"
            outsideText="to change that!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
        <Section>
          <HowItWorksContainer
            cards={[
              <HowItWorksCard
                logo={<img src={CreateLogo} alt="Create logo" />}
                mainText="Create a space for your students to work in"
                key="create logo"
              />,
              <HowItWorksCard
                logo={<img src={AdmitLogo} alt="Admit logo" />}
                mainText="Admit students based on criteria you Set"
                subText="You can add an admission fee too!"
                key="admit logo"
              />,
              <HowItWorksCard
                logo={<img src={SelectLogo} alt="Select logo" />}
                mainText="Select marketing jobs posted by startups, then assign to students"
                key="select logo"
              />,
              <HowItWorksCard
                logo={<img src={DeliverLogo} alt="Deliver logo" />}
                mainText="Deliver finished work and get ratings"
                key="deliver logo"
              />,
            ]}
            subText="Tendoledu makes you do even more"
          />
          <SignUpButtonDiv
            text="Sign Up Here"
            outsideText="to know more!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
        <Section>
          <YourGainContainer
            cards={[
              <YourGainCard
                logo={<img src={RecognitionLogo} alt="Recognition logo" />}
                title="Tangible Value"
                text="Their employers can see their work!"
                key="recognition logo"
              />,
              <YourGainCard
                logo={<img src={WorkLogo} alt="Work logo" />}
                title="Market Value"
                text="Real work experience!"
                key="work logo"
              />,
          ]}
            subText={(
              <SubText>
                WE
                {' '}
                <span role="img" aria-label="heart emoji">
                  ❤️
                </span>
                {' '}
                YOUR STUDENTS AS MUCH AS YOU DO!
              </SubText>
            )}
          />
          <SignUpButtonDiv
            text="Sign Up Here"
            outsideText="to see how!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
      </Layout>
    </MuiThemeProvider>
  );
};
