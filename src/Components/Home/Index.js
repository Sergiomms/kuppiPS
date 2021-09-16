import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header/Index";
import kuppiApi from "../../services/api";
import Card from "../Card/Index";
import Loading from "../../img/Reload-1s-200px.gif"
import Footer from "../Footer/Index";

const Home = () => {

    const [products, setProduct] = useState([])
    const [show, setShow] = useState(false)

    const callProducts = async () => {
        try {
            let response = await kuppiApi.getProducts()
            setProduct(response.data)
            setShow(true)
            console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('funciona')
        callProducts()
    }, [])

    return (
        <>
            <Main>
                <DivHeader>
                    <Header />
                </DivHeader>

                {show ?

                    <>
                        <Cards>
                            <Title>Produtos:</Title>
                            {products.map(products => {
                                return <Card id={products.id} name={products.name} price={products.price} image={products.photo_url} />
                            })}
                        </Cards>
                    </>
                    :
                    <Load><img src={Loading} alt="Loading"></img></Load>
                }


            </Main>
            <DivFooter>
                <Footer />
            </DivFooter>
        </>
    )
}

const Main = styled.div`
    display: grid;
    gap: 40px;
    width: 100%;
    min-height: 100vh;
    grid-template-areas: 
        "head"
        "content"
        "footer";
    grid-template-columns: 1fr;
`
const DivHeader = styled.header`
    grid-area: head;
`
const Cards = styled.main`
    grid-area: content;
    display: grid;
    grid-template-areas: 
        'item item item item';
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    grid-area: item;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const Load = styled.div`
    display: flex;
    justify-content: center;
`
const DivFooter = styled.div`
    grid-area: footer;
`

export default Home;