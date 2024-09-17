import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="displayflex footer">
        <div className="justifycontent_center footermsg">
          <div>Developed by SIVA KUMAR B</div>
        </div>
        <div>
          {
            <Link to="https://www.linkedin.com/in/sivakumar404/" target="blank">
              <FaLinkedin className="linkedin" />
            </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Footer;
