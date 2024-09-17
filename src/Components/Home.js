import React from "react";
import Type from "./Type";
import Textspan from "./Textspan";
import { motion } from "framer-motion";

const Home = () => {
  const userName = "SIVA KUMAR B".split("");
  return (
    <>
      <div className="App-content">
        <div className="content up-downanimation">
          <motion.div
            className="name_content"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: "0.5", delay: 0 }}
          >
            <h1 className="hi_there">Hi There!</h1>
            <br />
            <br />
            <h1 className="userName">
              I'M
              <strong className="namestyle">
                {" "}
                {userName.map((letters, index) => {
                  return (
                    <Textspan key={index}>
                      {letters === " " ? "\u00A0" : letters}
                    </Textspan>
                  );
                })}
              </strong>
            </h1>
            <br />
            <br />
            <div className="type_msg">
              <Type />
            </div>
          </motion.div>
          {/* <div>
            <img
              className="devimage"
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
