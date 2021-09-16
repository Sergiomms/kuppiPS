import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Logo from '../../img/logo_kuppi@2x.png'

const Header = () => {

    return (

        <MyHeader>
           <LogoLink to="/"><img src={Logo} alt="Kuppi Logo" /></LogoLink>
        </MyHeader>
    )

}

const MyHeader = styled.header`
width: 100%;
height: 5rem;
background-color:rgba(45, 255, 133, 1);
display: flex;
align-items: center;
`
const LogoLink = styled(NavLink)`
    margin-left: 6rem;
    img {
        height: 2.5rem;
    }
`

export default Header;