import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { media, FONT_SIZES } from '../constants';

import ProductHuntCat from './Images/ProductHuntCat';


const PRIMARY_COLOR = '#F15A23';
const SECONDARY_COLOR = '#2E353F';
const TIME_TILL_VISIBLE = 1700;

const Layout = styled.div`
    display: ${props => (props.isVisible ? 'block' : 'none')};
    position: fixed;
    z-index: 100;

    border-style: solid;
    border-color: ${SECONDARY_COLOR};
    border-width: 3px 3px 0 3px;
    border-radius: 3px;
    background-color: ${PRIMARY_COLOR};

    ${media.greaterThan('tablet')`
        width: 500px;
        bottom: 0;
        right: 0;
    `};

    ${media.lessThan('tablet')`
        width: 50vh;
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
        height: 5vh;
    `};

    ${media.lessThan('tablet')`
        height: 12vh;
    `};

    padding: 0 1.5% 0 1.5%;
`;

const Title = styled.h2`
    ${FONT_SIZES.xxl}
    color: white;
    margin: 0;

    text-align: center;
`;

const ImgWrapper = styled.div`
    padding: 1.5%;
    vertical-align: middle;
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
            size="large"
          >
            Join the discussion
          </Button>
        </ButtonWrapper>
      </Layout>
    );
};
