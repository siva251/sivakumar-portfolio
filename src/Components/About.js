import React from "react";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="about_content">
        <motion.h3
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="about_whoIm"
        >
          Nice to meet <strong className="namestyle">You!</strong>
        </motion.h3>
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="card about_border"
        >
          Hi Everyone, I'm <strong className="namestyle">Siva kumar</strong>{" "}
          from <strong className="namestyle">Tamil Nadu, India</strong>
          <br /> I am currently employed as a Software Engineer at Solartis.{" "}
          <br /> I have completed Bachelor of technology in Information
          Technology.
          <br />
          As an accomplished software engineer with over{" "}
          <strong className="namestyle">
            3 years of expertise in web development
          </strong>
          , I possess proficiency in JavaScript, React JS, HTML, CSS.
          <br /> <br />
          Apart from coding, some other activities that I love to do!
          <br />
          <br />
          <p className="alignCenter">
            <DoubleArrowOutlinedIcon className="timeline__title" /> Driving
          </p>
          <p className="alignCenter">
            <DoubleArrowOutlinedIcon className="timeline__title" /> Gardening
          </p>
        </motion.p>
      </div>
    </>
  );
};

export default About;
