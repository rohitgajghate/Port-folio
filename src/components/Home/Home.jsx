import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import Task1 from "../../Images/TASK-1.png";
import Task2 from "../../Images/TASK-2.png";
import Task3 from "../../Images/TASK-3.png";
import Task4 from "../../Images/TASK-4.png";
import Task5 from "../../Images/TASK-5.png";
import Task6 from "../../Images/TASK-6.png";
import Task7 from "../../Images/TASK-7.png";
import Task8 from "../../Images/TASK-8.png";
import Task9 from "../../Images/TASK-9.png";
import Task10 from "../../Images/TASK-10.png";
import Task11 from "../../Images/TASK-11.png";
import Task12 from "../../Images/TASK-12.png";
import Task13 from "../../Images/TASK-13.png";
import Task14 from "../../Images/TASK-14.png";
import Task15 from "../../Images/TASK-15.png";
import Task16 from "../../Images/TASK-16.png";
import Task17 from "../../Images/TASK-17.png";
import Task18 from "../../Images/TASK-18.png";
import Task19 from "../../Images/TASK-19.png";
import Task20 from "../../Images/TASK-20.png";
import Task21 from "../../Images/TASK-21.png";

import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>R</p>
          <p>O</p>
          <p>H</p>
          <p>I</p>
          <p>T</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">REACT DEVELOPER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">WEB DEVELOPER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">MY SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHlbnVivQlV23CfTzZMItg4LJkjT2TBl0Uw&usqp=CAU"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_Glf6ancjnkhTprFUnYptz7V7-HJfeBuQA&usqp=CAU"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://servicenav.coservit.com/wp-content/uploads/2022/05/18-1.jpg"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://img.stackshare.io/service/7374/react-redux.png"
              alt="Face2"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiBootstrap />
          <SiJavascript />
          <SiReact />
          <SiRedux />
          <SiMongodb />
          <SiExpress />
          <SiNodedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">PROJECTS</Typography>

        <div className="homeYoutubeWrapper">
          {/* {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))} */}

          <YoutubeCard image={Task1} title="FETCH API PRODUCTS" />
          <YoutubeCard image={Task2} title="ADD TO CART" />
          <YoutubeCard image={Task3} title="Employee Data Entry" />
          <YoutubeCard image={Task4} title="Slam Book for Friends" />
          <YoutubeCard image={Task5} title="Login Page" />
          <YoutubeCard image={Task6} title="Milk Delivery Entry" />
          <YoutubeCard image={Task7} title="Website Design" />
          <YoutubeCard image={Task8} title="ADD Images" />
          <YoutubeCard image={Task9} title="Admission Form" />
          <YoutubeCard image={Task10} title="ToDO List" />
          <YoutubeCard image={Task11} title="Digital Clock" />
          <YoutubeCard image={Task12} title="Calculator" />
          <YoutubeCard image={Task13} title="Olx" />
          <YoutubeCard image={Task14} title="Harrier" />
          <YoutubeCard image={Task15} title="Oxford University" />
          <YoutubeCard image={Task16} title="Policybazaar" />
          <YoutubeCard image={Task17} title="Png Jewellers" />
          <YoutubeCard image={Task18} title="Cipla" />
          <YoutubeCard image={Task19} title="Happyeasygo" />
          <YoutubeCard
            image={Task20}
            title="Loksatta ( मराठी ताज्या बातम्या )"
          />
          <YoutubeCard image={Task21} title="Narendra Modi" />
        </div>
      </div>
    </div>
  );
};

export default Home;
