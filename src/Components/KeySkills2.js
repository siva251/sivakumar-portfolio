import reactIcon from "../Assets/ReactIcon.jpeg";
import { motion } from "framer-motion";
import javaScriptIcon from "../Assets/Javascript_icon.png";
import htmlIcon from "../Assets/HTML_ICON.jpg";
import cssIcon from "../Assets/CSS_Icon.png";
import MySQLIcon from "../Assets/MySQL_icon.jpg";
import nodeIcon from "../Assets/nodejs_icon.png";

const keyskills2 =()=>{
    return(
        <>
        <div className="keyskill2_container">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: "0.5", delay: 0 }}
          className=""
        >
        <div className="about_border padding_2rem displayflex">
        <img
              src={reactIcon}
              alt="React Icon"
              style={{ borderRadius: "10px" }}
              className="keyskill2_img"
            /> 
            <div className="keyskill2_Desc">
              <div className="keyskill2_Desc_Text">
              <h2 className="namestyle"> <strong> REACT </strong></h2>
              <p className="fontSize_1_2rem">I specialize in developing Single Page Applications (SPAs) using React, with expertise in React Router, Redux, and integrating RESTful APIs. Including React component architecture, Redux Toolkit, React lifecycle methods, and advanced state management techniques. Additionally, I am proficient in React Hooks (useEffect, useContext, useState), API handling with Axios and Fetch, and building scalable component-based architectures.</p>
              </div>
            </div>       
        </div>
        <br/>
        <div className="about_border padding_2rem displayflex">
        <img
              src={javaScriptIcon}
              alt="React Icon"
              style={{ borderRadius: "10px" }}
              className="keyskill2_img"
            />   
            <div className="keyskill2_Desc">
            <div className="keyskill2_Desc_Text">
              <h2 className="namestyle"> <strong> JAVASCRIPT </strong></h2>
              <p className="fontSize_1_2rem">I have strong expertise in JavaScript, specializing in modern ES6+ features, asynchronous programming, and performance optimization. I am proficient in working with Promises, async/await, closures, event delegation. Additionally, I have hands-on experience in handling events efficiently, and optimizing code for better performance. </p>
              </div>
            </div>      
        </div>
        <br/>
        <div className="about_border padding_2rem displayflex">
        <img
              src={htmlIcon}
              alt="React Icon"
              style={{ borderRadius: "10px" }}
              className="keyskill2_img"
            />
            <div className="keyskill2_Desc">
            <div className="keyskill2_Desc_Text">
              <h2 className="namestyle"> <strong> HTML </strong></h2>
              <p className="fontSize_1_2rem">I have strong expertise in HTML5, focusing on writing clean, semantic, and accessible markup to ensure well-structured and SEO-friendly web pages. I am proficient in leveraging modern HTML features, including semantic elements, forms with validation, and multimedia integration. </p>
              </div>
            </div>        
        </div>
        <br/>
        <div className="about_border padding_2rem displayflex">
        <img
              src={cssIcon}
              alt="React Icon"
              style={{ borderRadius: "10px" }}
              className="keyskill2_img"
            /> 
            <div className="keyskill2_Desc">
            <div className="keyskill2_Desc_Text">
              <h2 className="namestyle"> <strong> CSS / SCSS </strong></h2>
              <p className="fontSize_1_2rem">I have strong expertise in CSS and SCSS, specializing in writing clean, maintainable, and scalable styles for modern web applications. I am proficient in CSS3 features, including Flexbox, Grid, animations, and transitions, ensuring responsive and visually appealing designs. My experience extends to using SCSS for modular styling, leveraging mixins, variables, and nesting to enhance maintainability. </p>
              </div>
            </div>       
        </div>
        <br/>
        <div className="about_border padding_2rem displayflex">
        <img
              src={MySQLIcon}
              alt="React Icon"
              style={{ borderRadius: "10px" }}
              className="keyskill2_img"
            /> 
            <div className="keyskill2_Desc">
            <div className="keyskill2_Desc_Text">
              <h2 className="namestyle"> <strong> MySQL </strong></h2>
              <p className="fontSize_1_2rem">I have strong expertise in MySQL, specializing in designing, optimizing, and managing relational databases for scalable applications. I am proficient in writing efficient SQL queries, stored procedures, and triggers to ensure high-performance data retrieval and manipulation. </p>
              </div>
            </div>       
        </div>
        </motion.p>
        </div>
        </>
    )
}

export default keyskills2;