// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const {character} = props

    const Cards = styled.div`
        height: 100%;
        width:100%;
        margin: 100px;
        display: grid;
        place-items: center;

        &:hover {
            color: green;
        }
        `
    const Name = styled.h1`
        display: block;
        font-size: 2em;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
        `
    const Info = styled.h4 `
        background-color:yellow;
        color:red;

        &:hover{
            color: teal;
            transform: scale(2);
            transition: all 1s ease-in-out;
        }
        transition: all 1s ease-in-out;

        `

    return (
        <Cards>
            <Name> Name: {character.name}</Name>
            <Info>Birth Year: {character.birth_year}</Info>
            <Info>Gender: {character.gender}</Info>

        </Cards>
    )
}
