import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsGoogle,
  BsFacebook,
  BsPhone,
} from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          I am currently as a web developer , I have 2 + Year experience, in
          frontend and backend , & currently i am growing my skill in new tech
          stack like <b>MERN Stack</b> in React, and node + Express
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Follow me on</Typography>

        <a href="tel:7768927481" target="black">
          <FiPhoneCall />
        </a>

        <a href="mailto:rohitgajghate9@gmail.com" target="black">
          <BsGoogle />
        </a>

        <a href="https://www.facebook.com/rohit.gajghate.94/" target="black">
          <BsFacebook />
        </a>

        <a href="https://www.instagram.com/rohit_gajghate/" target="black">
          <BsInstagram />
        </a>
        <a href="https://github.com/rohitgajghate/" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-gajghate-241006222/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
