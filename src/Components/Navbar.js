import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { MdSunny } from "react-icons/md";
import { LiaMedalSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { GiMoonBats } from "react-icons/gi";
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          className="themeicon"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <div>
              <MdSunny
                className="suncolor"
                style={{
                  paddingTop: "2%",
                  transition: "box-shadow .2s",
                  fontSize: "xxx-large",
                }}
              />
            </div>
          ) : (
            <div>
              <GiMoonBats
                color="black"
                style={{ paddingTop: "2%", fontSize: "xxx-large" }}
              />
            </div>
          )}
        </div>
        <nav>
          <NavLink
            className={({ isActive }) => {
              let classname = isActive ? "active-link" : "nonActive-link";
              if (menuOpen) {
                classname += " open";
              }
              return classname;
            }}
            to="/"
          >
            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              let classname = isActive ? "active-link" : "nonActive-link";
              if (menuOpen) {
                classname += " open";
              }
              return classname;
            }}
            to="/about"
          >
            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              let classname = isActive ? "active-link" : "nonActive-link";
              if (menuOpen) {
                classname += " open";
              }
              return classname;
            }}
            to="/keyskills"
          >
            <LiaMedalSolid style={{ marginBottom: "2px" }} />
            KeySkills
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              let classname = isActive ? "active-link" : "nonActive-link";
              if (menuOpen) {
                classname += " open";
              }
              return classname;
            }}
            to="/eperience"
          >
            <HomeRepairServiceIcon style={{ marginBottom: "2px" }} /> Work
            Experience
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              let classname = isActive ? "active-link" : "nonActive-link";
              if (menuOpen) {
                classname += " open";
              }
              return classname;
            }}
            to="/Resume"
          >
            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
          </NavLink>
          <Link to="https://www.linkedin.com/in/sivakumar404/" target="blank">
            <FaLinkedin className="linkedin" />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
