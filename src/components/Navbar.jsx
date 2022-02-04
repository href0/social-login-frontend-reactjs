import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Href Dev</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">John Doe</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
