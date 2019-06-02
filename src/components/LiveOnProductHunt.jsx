import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { media, FONT_SIZES } from '../constants';

import ProductHuntCat from './Images/ProductHuntCat';


const PRIMARY_COLOR = '#F15A23';
const SECONDARY_COLOR = '#2E353F';
const TIME_TILL_VISIBLE = 4500;
const REDIRECT_URL = 'https://producthunt.com';

const Layout = styled.div`
    display: ${props => (props.isVisible ? 'block' : 'none')};
    position: fixed;
    z-index: 100;

    border-style: solid;
    border-color: ${SECONDARY_COLOR};
    border-width: 3px 3px 0 3px;
    border-radius: 3px;
    background-color: ${PRIMARY_COLOR};

    box-shadow: 0px 2px 20px -5px rgba(0, 0, 0, 0.4);

    ${media.greaterThan('tablet')`
        width: 300px;
        bottom: 0;
        right: 0;
    `};

    ${media.lessThan('tablet')`
        width: 40vw;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    `};

    ${media.lessThan('mobileLarge')`
        width: 70vw;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    `};

    ${media.lessThan('mobileMedium')`
        width: 85vw;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    `};
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;

    ${media.greaterThan('tablet')`
        height: 5vh;
    `};

    ${media.lessThan('tablet')`
        height: 7vh;
    `};
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;


    ${media.greaterThan('tablet')`
        height: 7vh;
    `};

    ${media.lessThan('tablet')`
        height: 13vh;
    `};

    padding: 0 1.5% 0 1.5%;
`;

const Title = styled.h2`
    ${FONT_SIZES.xl}
    color: white;
    margin: 0;

    text-align: center;
`;

const ImgWrapper = styled.div`
    padding: 4%;
    margin: 0 auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 20px 0;

    height: 5vh;
    padding: 1.5%;
`;

export default () => {
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => {
        setTimeout(
            () => setIsVisible(true),
            TIME_TILL_VISIBLE,
        );
    }, []);

    return (
      <Layout isVisible={isVisible}>
        <HeaderWrapper>
          <IconButton
            onClick={() => setIsVisible(false)}
            aria-label="Close Dialog"
            style={{ color: SECONDARY_COLOR }}
          >
            <CloseIcon />
          </IconButton>
        </HeaderWrapper>

        <TitleWrapper>
          <Title>
            We're live on Product Hunt!
          </Title>
        </TitleWrapper>

        <ImgWrapper>
          <ProductHuntCat style={{ verticalAlign: 'middle' }} />
        </ImgWrapper>

        <ButtonWrapper>
          <Button
            style={{ backgroundColor: SECONDARY_COLOR, color: 'white' }}
            size="medium"
            onClick={() => {
                setIsVisible(false);
                window.open(REDIRECT_URL);
            }}
          >
            Join the discussion
          </Button>
        </ButtonWrapper>
      </Layout>
    );
};
