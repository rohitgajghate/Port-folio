// import { Typography } from "@mui/material";
// import React from "react";
// import "./About.css";

// const About = ({ about }) => {
//   return (
//     <div className="about">
//       <div className="aboutContainer">
//         <Typography>{about.quote}</Typography>
//       </div>
//       <div className="aboutContainer2">
//         <div>
//           <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />

//           <Typography
//             variant="h4"
//             style={{ margin: "1vmax 0", color: "black" }}
//           >
//             {about.name}
//           </Typography>

//           <Typography>{about.title}</Typography>

//           <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
//             {about.subtitle}
//           </Typography>
//         </div>

//         <div>
//           <Typography
//             style={{
//               wordSpacing: "5px",
//               lineHeight: "50px",
//               letterSpacing: "5px",
//               textAlign: "right",
//             }}
//           >
//             {about.description}
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          <b> HTML CSS JAVASCRIPT REACT REDUX MONGODB EXPRESS NODEJS</b>{" "}
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://lh3.googleusercontent.com/a/AItbvmnwNXf7kOIajxrpdI6klro4AYWD1MnglZxCis1IbQ=s360-p-rw-no"
            alt="Rohit"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            ROHIT GAJGHATE
          </Typography>

          <Typography>FULL-STACK DEVELOPER</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            2 + years of experience in web application development in React JS
            environment.
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I love to build efficient & logical Backend using Node.JS. I also
            design & code attractive frontend using React. Technologies I used
            are Mongodb as Database, Express & NodeJs as Backend & React for
            Frontend.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
