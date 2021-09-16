import React, { useState, useEffect } from "react";
import styled from "styled-components";
import kuppiApi from "../../services/api";
import Loading from "../../img/Reload-1s-200px.gif"
import { useHistory } from "react-router-dom";


const Item = ({ id }) => {

    const [product, setProduct] = useState("")
    const [show, setShow] = useState(false)

    let history = useHistory()

    const ShowItem = async (id) => {
        try {
            let response = await kuppiApi.getItem(id)
            setProduct(response.data)
            setShow(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ShowItem(id)

    }, [])

    return (
        <>
            {show ?
                <>
                    <Title>Produto:</Title>
                    <Content>
                        <ItemImg src={product.photo_url} alt="Item Image" />
                        <Break>
                            <P><SpanBold>{product.name}</SpanBold></P>
                            <Span>R$ {product.price}</Span>
                            <P><SpanBold>Categoria:</SpanBold> {product.category}</P>
                            <P><SpanBold>Descrição:</SpanBold> {product.description}</P>
                            <Button onClick={() => { history.push("/") }}>Voltar</Button>
                        </Break>

                    </Content>
                </>
                :
                <Load><img src={Loading} alt="Loading"></img></Load>
            }
        </>
    )
}


const Content = styled.div`
    margin: 0 15rem;
    display: flex;  
    justify-content: center;
`
const Title = styled.h1`
    margin: 2rem 0;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Load = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: center;
`
const ItemImg = styled.img`
    max-width: 15rem;
    max-height: 10rem;
`
const Break = styled.div`
    display: flex;
    flex-direction: column;
`
const P = styled.p`
    margin-left: 2rem;
    margin-top: 0.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const SpanBold = styled.span`
    font-weight: bold;
`
const Span = styled.span`
    margin-left: 2rem;
    font-weight: bold;
    font-size: 2.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Button = styled.button`
    margin-top: 2rem;
   margin-left: 2rem;
    width: 5rem;
    height: 3rem;
    border: none;
    background-color: rgba(45, 255, 133, 1);
    font-size: 1rem;
    font-weight: bold;
    color: black;
    &:hover{
        cursor: pointer;
    }
`
export default Item;