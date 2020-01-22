import React from "react";
import logo from "../../assets/pictures/logo2.png";
import './logo.css'

const Logo = ({size = 200}) => (
    <img src={logo} alt="logo" width={size} />
)

export default Logo
