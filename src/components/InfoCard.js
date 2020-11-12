import React from 'react';
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
    border: 1px solid ${props => props.theme.colors.secondary};
    box-shadow:2px 2px 2px;
    padding: 5px 5px;
    margin: 5px 10px;
    &:hover{
        color:${props => props.theme.colors.secondary};
        background-color:#fff;
    }
`

const Wrapper = styled.div`
    width: 250px;
    height: 250px;
    background-color:${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 7px;
    margin: 30px;
    box-shadow:2px 2px 2px;
`

const Title = styled.h2`
    font-family: sans-serif;
    font-weight: bold;
    color: ${props => props.theme.colors.secondary};
    padding: 10px;
    margin: 5px;
`

const CardText = styled.p`
    font-family: sans-serif;
    color:black;
    font-size:12px;
    padding: 10px;
    margin: 5px;
`

const myText = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

export default function InfoCard() {
    return (
        <div>
            <Wrapper>
                <Title>Welcome</Title>
                <CardText> {myText} </CardText>
                <Button>Contact Us</Button>
            </Wrapper>
        </div>
    )
}
