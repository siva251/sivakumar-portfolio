import React from "react";
import { motion } from "framer-motion";
import "./Skillset.css";
import reactIcon from "../Assets/customReact.png";
import javaScriptIcon from "../Assets/customJavascript.png";
import htmlIcon from "../Assets/customHTML.png";
import cssIcon from "../Assets/customCSS.png";
import MySQLIcon from "../Assets/customMysql.png";

const Skillset = () => {
  const data = [
    {
      Image: reactIcon,
      alt: "React Icon",
      Keyskill: "REACT",
      desc: "I possess expertise in React Life Cycle » Redux » React Hooks » Context » Routes » Performance Optimization",
    },
    {
      Image: javaScriptIcon,
      alt: "Javascript Icon",
      Keyskill: "JavaScript",
      desc: " ES6 Features  » Arrow Fuction » Promises » Async-Await » Recursion » Map » Array",
    },
    {
      Image: htmlIcon,
      alt: "React Icon",
      Keyskill: "REACT",
      desc: "As an accomplished software engineer with over 3 years of expertise in web development, I possess proficiency in React JS ",
    },
    {
      Image: cssIcon,
      alt: "React Icon",
      Keyskill: "REACT",
      desc: "As an accomplished software engineer with over 3 years of expertise in web development, I possess proficiency in React JS ",
    },
    {
      Image: MySQLIcon,
      alt: "React Icon",
      Keyskill: "REACT",
      desc: "As an accomplished software engineer with over 3 years of expertise in web development, I possess proficiency in React JS ",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.75", delay: 0 }}
          className="skillRoot"
        >
          {data.map((value) => (
            <div class="SkillsetContainer">
              <div class="Skillcard">
                <div class="img-container">
                  <img src={value.Image} alt={value.alt} />
                </div>
                <div class="card-details">
                  <h2>{value.Keyskill}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skillset;
