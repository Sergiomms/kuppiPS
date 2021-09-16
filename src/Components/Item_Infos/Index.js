import React from "react";
import styled from "styled-components";
import Header from "../Header/Index";
import Item from "../Item/Index";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Index";

const ItemInfo = () => {

    let { id } = useParams()

    return (
        <>
            <Main>
                <DivHeader>
                    <Header />
                </DivHeader>
                <ContainerITem>
                    <Item id={id}></Item>
                </ContainerITem>
            </Main>
            <DivFooter>
                <Footer />
            </DivFooter>
        </>
    )
}
const Main = styled.div`
    display: grid;
    width: 100%;
    grid-template-areas: 
        "head"
        "content"
        "footer";
    grid-template-columns: 1fr;
`
const DivHeader = styled.header`
    grid-area: head;
`
const ContainerITem = styled.div`
    grid-area: content;
`
const DivFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    grid-area: footer;
    margin-top: 1rem;
`

export default ItemInfo;