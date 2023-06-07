import React from "react";
import Dashbroad from "../pages/Host/Dashbroad";
import { NavLink, Outlet } from "react-router-dom";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashbroad
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>{" "}
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
