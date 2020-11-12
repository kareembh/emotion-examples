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
    border: 1px solid ${props => props.theme.colors.complementry};
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

export default function InfoCard(props) {
    return (
        <div>
            <Wrapper>
                <Title> {props.cardTitle} </Title>
                <CardText> {props.cardText} </CardText>
                <Button> {props.cardButtonText} </Button>
            </Wrapper>
        </div>
    )
}
