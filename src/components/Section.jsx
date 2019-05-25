import styled from 'styled-components';


export default styled.section`
    height: ${props => props.height};
    background-image: ${props => props.backgroundImage};
    background-color: ${props => props.backgroundColor};

    margin: 0 auto;
    padding: 3vh;
    margin-bottom: 3vh;
    margin-top: 2vh;
`;
