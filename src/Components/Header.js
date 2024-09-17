import React from "react";
import Navbar from "./Navbar";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <div>
        <div className="">

          <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
};

export default Header;
