import styled from '@emotion/styled';

//Button styled component using the our already defined theme colors from our Theme.js file
const Button = styled.button`
    width:100px;
    height:30px;
    font-family: sans-serif;
    font-weight: bold;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colors.complementry};
    box-shadow:2px 2px 2px;
    padding: 5px 5px;
    margin: 5px 10px;
    &:hover{
        color:${props => props.theme.colors.secondary};
        background-color:#fff;
    }
`

export default Button;