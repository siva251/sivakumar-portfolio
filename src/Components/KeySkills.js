import React from "react";
import { motion } from "framer-motion";
import reactIcon from "../Assets/ReactIcon.jpeg";
import javaScriptIcon from "../Assets/Javascript_icon.png";
import htmlIcon from "../Assets/HTML_ICON.jpg";
import cssIcon from "../Assets/CSS_Icon.png";
import MySQLIcon from "../Assets/MySQL_icon.jpg";
import nodeIcon from "../Assets/nodejs_icon.png";

const KeySkills = () => {
  return (
    <>
      <div className="content">
        <motion.h3
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.75", delay: 0 }}
          className="about_whoIm"
        >
          Professional <strong className="namestyle">Skillset</strong>
        </motion.h3>
      </div>
      <br />
      <div className="iconAlignment" style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="flex_colomn"
        >
          <div className="cardIcon">
            <img
              src={reactIcon}
              alt="React Icon"
              style={{ borderRadius: "10px" }}
              className="width_100"
            />
          </div>
          <p
            className="keyskill_container whitecolor"
            style={{ fontSize: "3rem" }}
          >
            <p>React</p>
            <div className="keyskill_card">
              <div className="keyskill_card_content"></div>
            </div>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="flex_colomn"
        >
          <div className="cardIcon">
            <img
              src={javaScriptIcon}
              alt="Javascript Icon"
              style={{ borderRadius: "10px" }}
              className="width_100"
            />
          </div>
          <p
            className="keyskill_container whitecolor"
            style={{ fontSize: "3rem" }}
          >
            <div className="keyskill_card">
              <div className="keyskill_card_content">
                <p>JavaScript</p>
              </div>
            </div>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="flex_colomn"
        >
          <div className="cardIcon">
            <img
              src={htmlIcon}
              alt="html Icon"
              style={{ borderRadius: "10px" }}
              className="width_100"
            />
          </div>
          <p
            className="keyskill_container whitecolor"
            style={{ fontSize: "3rem" }}
          >
            <div className="keyskill_card">
              <div className="keyskill_card_content">
                <p>HTML</p>
              </div>
            </div>
          </p>
        </motion.div>
      </div>
      <div className="iconAlignment">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="flex_colomn"
        >
          <div className="cardIcon">
            <img
              src={nodeIcon}
              alt="node Icon"
              style={{ borderRadius: "10px" }}
              className="width_100"
            />
          </div>
          <p
            className="keyskill_container whitecolor"
            style={{ fontSize: "3rem" }}
          >
            <div className="keyskill_card">
              <div className="keyskill_card_content">
                <p>Node</p>
              </div>
            </div>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="flex_colomn"
        >
          <div className="cardIcon">
            <img
              src={cssIcon}
              alt="css Icon"
              style={{ borderRadius: "10px" }}
              className="width_100"
            />
          </div>
          <p
            className="keyskill_container whitecolor"
            style={{ fontSize: "3rem" }}
          >
            <div className="keyskill_card">
              <div className="keyskill_card_content">
                <p>CSS</p>
              </div>
            </div>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className="flex_colomn"
        >
          <div className="cardIcon">
            <img
              src={MySQLIcon}
              alt="Mysql Icon"
              style={{ borderRadius: "10px" }}
              className="width_100"
            />
          </div>
          <p
            className="keyskill_container whitecolor"
            style={{ fontSize: "3rem" }}
          >
            <div className="keyskill_card">
              <div className="keyskill_card_content">
                <p>MySQL</p>
              </div>
            </div>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default KeySkills;
