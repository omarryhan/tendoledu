import { generateMedia } from 'styled-media-query';
import { transitions, positions } from 'react-alert';


const SCHOOLS_AVAILABLE = Object.freeze([
    'Marketing',
    'Web Development',
    'Graphic Design',
]);

export const SchoolsSignedUpAlertMessages = [
    {
        message: `A ${SCHOOLS_AVAILABLE[Math.floor(Math.random() * SCHOOLS_AVAILABLE.length)]} school just signed up 🚀🚀`,
        // According to Tendoledu: this is the average time a school signs up. Every minute.
        waitTime: [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)] * 1000,
        alertTime: 5 * 1000,
    },
    {
        message: `A ${SCHOOLS_AVAILABLE[Math.floor(Math.random() * SCHOOLS_AVAILABLE.length)]} school just signed up 🚀🚀`,
        // According to Tendoledu: this is the average time a school signs up. Every minute.
        waitTime: [6, 7, 8, 9, 10, 11][Math.floor(Math.random() * 6)] * 1000,
        alertTime: 5 * 1000,
    },
    {
        message: `A ${SCHOOLS_AVAILABLE[Math.floor(Math.random() * SCHOOLS_AVAILABLE.length)]} school just signed up 🚀🚀`,
        // According to Tendoledu: this is the average time a school signs up. Every minute.
        waitTime: [12, 13, 14, 15, 16, 17, 18][Math.floor(Math.random() * 7)] * 1000,
        alertTime: 5 * 1000,
    },
    {
        message: `A ${SCHOOLS_AVAILABLE[Math.floor(Math.random() * SCHOOLS_AVAILABLE.length)]} school just signed up 🚀🚀`,
        // According to Tendoledu: this is the average time a school signs up. Every minute.
        waitTime: [19, 20, 21, 22, 23, 24, 25, 26][Math.floor(Math.random() * 8)] * 1000,
        alertTime: 5 * 1000,
    },
];

export const TYPOGRAPHY = Object.freeze({
    useNextVariants: true,
    suppressDeprecationWarnings: true,
});

export const COLOR_PALETTE = Object.freeze({
    red: {
        primary: opacity => `rgba(255, 82, 82, ${opacity || '1'})`,
    },
    turquoise: {
        primary: opacity => `rgba(29, 233, 182, ${opacity || '1'})`,
        dark: opacity => `rgba(39, 243, 190, ${opacity || '1'})`,
    },
    black: {
        primary: opacity => `rgba(0, 0, 0, ${opacity || '1'})`,
        light: opacity => `rgb(63, 63, 63, ${opacity || '1'})`,
    },
    white: {
        primary: opacity => `rgba(255, 255, 255, ${opacity || '1'})`,
        dark: opacity => `rgba(230, 230, 230, ${opacity || '1'})`,
    },
    blue: {
        primary: opacity => `rgba(0, 174, 239, ${opacity || '1'})`,
    },
});

export const SCHOOLS_THEME = Object.freeze({
    palette: {
        primary: {
            main: COLOR_PALETTE.turquoise.primary(),
            contrastText: COLOR_PALETTE.black.primary(),
        },
        secondary: {
            main: COLOR_PALETTE.red.primary(),
            contrastText: COLOR_PALETTE.white.primary(),
        },
    },
    typography: TYPOGRAPHY,
});

export const STUDENTS_THEME = Object.freeze({
    palette: {
        primary: {
            main: COLOR_PALETTE.turquoise.primary(),
            contrastText: COLOR_PALETTE.black.primary(),
        },
        secondary: {
            main: COLOR_PALETTE.red.primary(),
            contrastText: COLOR_PALETTE.white.primary(),
        },
    },
    typography: TYPOGRAPHY,
});

export const STARTUPS_THEME = Object.freeze({
    palette: {
        primary: {
            main: COLOR_PALETTE.turquoise.primary(),
            contrastText: COLOR_PALETTE.black.primary(),
        },
        secondary: {
            main: COLOR_PALETTE.red.primary(),
            contrastText: COLOR_PALETTE.white.primary(),
        },
    },
    typography: TYPOGRAPHY,
});

export const NOT_FOUND_THEME = Object.freeze({
    palette: {
        primary: {
            main: COLOR_PALETTE.turquoise.primary(),
            contrastText: COLOR_PALETTE.black.primary(),
        },
        secondary: {
            main: COLOR_PALETTE.red.primary(),
            contrastText: COLOR_PALETTE.white.primary(),
        },
    },
    typography: TYPOGRAPHY,
});

export const HEADER_HEIGHT = 70; // px
export const FOOTER_HEIGHT = 130; // px

export const LaptopLayoutWidth = '65vw';
export const TabletLayoutWidth = '75vw';
export const MobileLargeLayoutWidth = '95vw';
export const MobileLayoutWidth = '95vw';

export const BREAKPOINTS = Object.freeze({
    mobileSmall: '20em',
    mobileMedium: '23.438em',
    mobileLarge: '25.875em',
    tablet: '48em',
    laptop: '68.75em',
    laptopLarge: '90em',
    laptopXLarge: '120em',
    desktop: '160em',
});

export const media = generateMedia(BREAKPOINTS);

export const alertSettings = {
    position: positions.BOTTOM_LEFT,
    timeout: 5000,
    transition: transitions.SCALE,
};

export const RECAPTCHA_PUBLIC_KEY = '6LcOB6UUAAAAAGFpmRUeUHX66ybYyoPn-au8xyMi';
export const SIGNUP_ROUTE = 'https://api.tendoledu.com/signup/';

export const FONT_SIZES = {
    xxxxxl: `
        font-size: 3em;

        ${media.lessThan('laptop')`
            font-size: 2.25em;
        `};

        ${media.lessThan('tablet')`
            font-size: 1.75em;
        `};

        ${media.lessThan('mobileMedium')`
            font-size: 1.35em;
        `};
    `,

    xxxxl: `
        font-size: 2.5em;

        ${media.lessThan('laptop')`
            font-size: 2em;
        `};
    
        ${media.lessThan('tablet')`
            font-size: 1.5em;
        `};
    
        ${media.lessThan('mobileMedium')`
            font-size: 1.05em;
        `};
    `,

    xxxl: `
        font-size: 2.25em;

        ${media.lessThan('laptop')`
            font-size: 1.75em;
        `};
    
        ${media.lessThan('tablet')`
            font-size: 1.55em;
        `};
    
        ${media.lessThan('mobileMedium')`
            font-size: 0.9em;
        `};
    `,

    xxl: `
        font-size: 2em;

        ${media.lessThan('laptop')`
            font-size: 1.5em;
        `};
    
        ${media.lessThan('tablet')`
            font-size: 1.25em;
        `};
    
        ${media.lessThan('mobileMedium')`
            font-size: 0.8em;
        `};
    `,

    xl: `
        font-size: 1.5em;

        ${media.lessThan('laptop')`
            font-size: 1.25em;
        `};

        ${media.lessThan('tablet')`
            font-size: 1em;
        `};

        ${media.lessThan('mobileMedium')`
            font-size: 0.7em;
        `};
    `,

    lg: `
        font-size: 1.25em;

        ${media.lessThan('laptop')`
            font-size: 1em;
        `};

        ${media.lessThan('tablet')`
            font-size: 0.85em;
        `};

        ${media.lessThan('mobileMedium')`
            font-size: 0.65em;
        `};
    `,

    md: `
        font-size: 1em;

        ${media.lessThan('laptop')`
            font-size: 0.85em;
        `};

        ${media.lessThan('tablet')`
            font-size: 0.75em;
        `};

        ${media.lessThan('mobileMedium')`
            font-size: 0.6em;
        `};
    `,

    sm: `
        font-size: 0.85em;

        ${media.lessThan('laptop')`
            font-size: 0.75em;
        `};

        ${media.lessThan('tablet')`
            font-size: 0.65em;
        `};

        ${media.lessThan('mobileMedium')`
            font-size: 0.55em;
        `};
    `,

    xs: `
        font-size: 0.75em;

        ${media.lessThan('laptop')`
            font-size: 0.65em;
        `};

        ${media.lessThan('tablet')`
            font-size: 0.55em;
        `};

        ${media.lessThan('mobileMedium')`
            font-size: 0.45em;
        `};
    `,
};
