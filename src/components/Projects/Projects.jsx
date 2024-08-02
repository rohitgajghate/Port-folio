import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import Task1 from "../../Images/TASK-1.png";
import Task2 from "../../Images/TASK-2.png";
import Task4 from "../../Images/TASK-4.png";
import Task5 from "../../Images/TASK-5.png";
import Task6 from "../../Images/TASK-6.png";
import Task7 from "../../Images/TASK-7.png";
import Task8 from "../../Images/TASK-8.png";
import Task9 from "../../Images/TASK-9.png";
import Task10 from "../../Images/TASK-10.png";
import Task11 from "../../Images/TASK-11.png";
import Task12 from "../../Images/TASK-12.png";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a
        href="https://shopping-fetch-api-product.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task1} alt="Project" />

          <Typography variant="h5">Shopping Web</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>
            A Full-Stack Ecommerce store I have used Fetch API from fake Server.
          </Typography>
          <Typography variant="h6">
            Tech Stack: REACT.JS, CSS , BOOTSTRAP
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-add-to-cart-app.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task2} alt="Project" />

          <Typography variant="h5">ADD-TO-CART</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>

          <Typography>
            A Full-Stack Ecommerce Store with Add to cart Functionality.
          </Typography>
          <Typography variant="h6">
            Tech Stack: REACT.JS, CSS , BOOTSTRAP
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-friend-routing.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task4} alt="Project" />

          <Typography variant="h5">ROUTE DETAILS</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>

          <Typography> routing the Details in Peoples</Typography>
          <Typography variant="h6">
            Tech Stack: React , css , React-Router-Dom
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-loginpage.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task5} alt="Project" />

          <Typography variant="h5">LOGIN PAGE</Typography>
        </div>
        <div>
          <Typography variant="h4"> Login Page</Typography>
          <Typography>
            There is a Login option on Navigation bar After clicking on login
            option the Login page will open after sign in all data will be save
            on server side. If you are forget the password you can reset the
            password .
          </Typography>
          <Typography variant="h6">
            Tech Stack: React.js, Css, Mongodb
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-milkdelivery.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task6} alt="Project" />

          <Typography variant="h5">DAILY MILK ENTRY</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>
            The fuction of daily milk entry is that to save everyday milk data
          </Typography>
          <Typography variant="h6">Tech Stack: React.js, Css</Typography>
        </div>
      </a>

      <a
        href="https://rg-web-design.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task7} alt="Project" />

          <Typography variant="h5">WEB DESIGN</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>only frontend part in web design </Typography>
          <Typography variant="h6">Tech Stack: Html, Css, Bootstrap</Typography>
        </div>
      </a>

      <a
        href="https://rg-display-img.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task8} alt="Project" />

          <Typography variant="h5">DISPLAY IMAGE</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>
            The function of the display is that if we are Click on Image. After
            that the image will display on a screen in full view.
          </Typography>
          <Typography variant="h6">
            Tech Stack: React.js, Css, BOOTSTRAP
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-admission-form.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task9} alt="Project" />

          <Typography variant="h5">ADMISSION FROM</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>
            A registration form is a list of fields that a user will input data
            into and submit to Everywhere , The function of the form is that you
            have to mention atleast 3 digit in the form. If you are not mention
            atleast 3 digits in the form, The form will not be submitted.
          </Typography>
          <Typography variant="h6">
            Tech Stack: React.js, Css, BOOTSTRAP
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-todo-list.netlify.app/"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task10} alt="Project" />

          <Typography variant="h5">TODO-LIST</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>
            The way this Todo List app works is pretty simple. Type in a task or
            item or whatever you want into the input field and press Add Button
            . Once you've submitted your item, you will see it appear as an
            entry. You can keep adding item to add additional entries and have
            them all show up:
          </Typography>
          <Typography variant="h6">
            Tech Stack: React.js, Css, BOOTSTRAP{" "}
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-digitalclock.netlify.app"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task11} alt="Project" />

          <Typography variant="h5">DIGITAL CLOCK</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>

          <Typography>
            Digital clock show accurate time.This type of clock shows numbers to
            display the time in a digital format, such as on a watch, phone or
            an alarm clock. This can be in both 12 and 24-hour formats.
          </Typography>
          <Typography variant="h6">
            Tech Stack: React.js, Css, BOOTSTRAP
          </Typography>
        </div>
      </a>

      <a
        href="https://rg-calculator.netlify.app/"
        className="projectCard"
        target="black"
      >
        <div>
          <img src={Task12} alt="Project" />

          <Typography variant="h5">CALCULATOR</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>

          <Typography>
            This Calculator can calculate All Values. I Add Extra button in This
            calculator the name of button is "clear" The function of the button
            can cleared All the values.
          </Typography>
          <Typography variant="h6">
            Tech Stack: HTML, CSS, BOOTSTRAP, RACT.JS
          </Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        <ProjectCard />
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
