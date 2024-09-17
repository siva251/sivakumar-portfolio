import React from "react";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <div>
        <div class="timeline" style={{ overflow: "hidden" }}>
          <div class="timeline__component">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: "0.75", delay: 0 }}
              class="timeline__date timeline__date--right"
            >
              <strong className="namestyle">
                06 July, 2022 - Present, 2022 - SOLARTIS
              </strong>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: "0.75", delay: 0 }}
            class="timeline__middle"
          >
            <div class="timeline__point"></div>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: "0.75", delay: 0 }}
            class="timeline__component timeline__component--bg"
          >
            <h2 class="timeline__title">SOFTWARE ENGINEER</h2>
            <p class="timeline__paragraph">
              <ul>
                <li>
                  Experienced React Developer at Designing and developing
                  high-performance, responsive web applications using ReactJS,
                  JavaScript, HTML, and CSS.
                </li>
                <li>
                  Implementing state management using tools like Redux or
                  Context API for large-scale applications.
                </li>
                <li>
                  Building reusable and efficient front-end react components and
                  react libraries for future use.
                </li>
                <li>
                  Collaborating with cross-functional teams to analyze, define,
                  and document project requirements.
                </li>
                <li>
                  Debugging, and optimizing the react application for maximum
                  speed and scalability.
                </li>
              </ul>
            </p>
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: "0.75", delay: 0 }}
            class="timeline__component timeline__component--bg"
          >
            <h2 class="timeline__title">ASSOCIATE SOFTWARE ENGINEER</h2>
            <p class="timeline__paragraph">
              <ul>
                <li>
                  As a Front-End developer skilled in crafting high-quality
                  Web/User Interfaces adhering to W3C Web Standards, ensuring
                  cross-browser compatibility and exceptional user experiences.
                </li>
                <li>
                  Expertise in utilizing ReactJS, JavaScript, HTML, and CSS to
                  develop interactive, responsive, and performant web
                  applications.
                </li>
                <li>
                  Proficient in version control systems like SVN/Git for
                  managing codebase and facilitating collaborative development.
                </li>
                <li>
                  Experienced in using Project/Task Management Systems such as
                  Jira and Bugzilla for efficient project organization and task
                  tracking.
                </li>
                <li>
                  Familiarity with Build Servers and Continuous Integration
                  tools like Jenkins to automate and streamline the development,
                  testing, and deployment processes.
                </li>
              </ul>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: "0.75", delay: 0 }}
            class="timeline__middle"
          >
            <div class="timeline__point"></div>
          </motion.div>
          <div class="timeline__component">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: "0.75", delay: 0 }}
              class="timeline__date"
            >
              <strong className="namestyle">
                05 July, 2021 - 05 July, 2022 - SOLARTIS
              </strong>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
