import styled from 'styled-components';


export default styled.section`
    height: ${props => props.height || '100px'};
    ${
        props => (props.backgroundImage
            ? `background-image url("${props.backgroundImage}");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: auto 100%;
            background-size:contain;
            background-position: center;
            background-repeat: no-repeat;`
            : '')
    };
    background-color: ${props => props.backgroundColor || ''};

    margin: 0 auto;
`;
