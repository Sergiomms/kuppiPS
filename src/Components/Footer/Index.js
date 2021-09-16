import React from "react";
import styled from 'styled-components';
import Logo from "../../img/kuppiLogoDark-removebg-preview.png"
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <MyFooter>
                <LogoLink to="/"><img src={Logo} alt="Kuppi Logo" /></LogoLink>
            </MyFooter>


        </>
    )

}

const MyFooter = styled.footer`
width: 100%;
height: 5rem;
background-color:#282828 ;
display: flex;
align-items: center;
`
const LogoLink = styled(NavLink)`
    margin-left: 6rem;
    img {
        height: 2.5rem;
    }
`
export default Footer;