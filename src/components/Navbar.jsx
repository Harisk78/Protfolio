import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="childs" style={{ display: "flex", gap: "20px" }}>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/project">Project</Link>
        </p>
        <p>
          <Link to="/certificate">Certificate</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
