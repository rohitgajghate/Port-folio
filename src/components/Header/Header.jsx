import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Images/rg.webp";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="#f1c40f"
      burgerColorHover="white"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="white"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="#f1c40f"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="#f1c40f"
      profileIconColorHover="white"
    />
  );
};

export default Header;
