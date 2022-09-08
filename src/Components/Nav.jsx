import instagramLogo from "../assets/instagram.png";
import { FaHome, FaCommentAlt, FaCompass, FaHeart } from "react-icons/fa";

import React from "react";

const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagramLogo} alt="logo" />
      </button>
      <input type="text" className="search" placeholder="search" />
      <span className="nav-links">
        <button>
          <FaHome className="i" />
        </button>
        <button>
          <FaCommentAlt className="i" />
        </button>
        <button>
          <FaCompass className="i" />
        </button>
        <button>
          <FaHeart className="i" />
        </button>
      </span>
    </nav>
  );
};

export default Nav;
