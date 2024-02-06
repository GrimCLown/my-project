import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <a href="#">
          <AiOutlineHome />
        </a>
        <a href="#about">
          <AiOutlineUser />
        </a>
        <a href="#experience">
          <AiOutlineBook />
        </a>
        <a href="#project">
          <AiOutlineCode />
        </a>
        <a href="#contacts">
          <AiOutlinePhone />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
