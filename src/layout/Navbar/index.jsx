import React, {useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";
import logo from '../../assets/temp.png'
import axios from "axios";

const NavBar = () => {

  
  const activeStyle = {
    outline: "solid 2px #3E8989",
    backgrounColor: "var(--outline)",
  };

  const navActive = ({ isActive }) => (isActive ? activeStyle : undefined);


  return (
    <>
      <nav className="nav-row">

        <ul>
          <li>
            <NavLink to="/" style={navActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/chatbot" style={navActive}>
              Chatbot
            </NavLink>
          </li>
    
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;