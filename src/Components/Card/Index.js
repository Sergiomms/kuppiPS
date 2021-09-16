import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Card = ({id, name, price, image }) => {

    let history = useHistory()

    return (

        <Main onClick={() => {history.push(`/products/${id}`)}}>
            <Img src={image}></Img>
            <Name>{name}</Name>
            <p>R$ {price}</p>
        </Main>
    )

}

const Main = styled.div`
    border: rgba(45, 255, 133, 1) solid 2px;
    border-radius: 20px;
    width: 15rem;
    height: 20rem;
    margin:10px;
    justify-self: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #EFEFEF;
    &:hover{
      cursor: pointer;
      color: rgba(45, 255, 133, 1);
    }
`
const Img = styled.img`
    max-width: 10rem;
    max-height: 10rem;
`
const Name = styled.h1`
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
`
export default Card;