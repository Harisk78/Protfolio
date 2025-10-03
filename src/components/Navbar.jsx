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
        position: "sticky",
        top: 0,
        backgroundColor: "#000000ff",
        zIndex: 1000,
      }}
    >
      <div className="childs" style={{ display: "flex", gap: "20px" }}>
        <p>
          <Link
            to="/"
            style={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}
          >
            Home
          </Link>
        </p>
        <p>
          <Link
            to="/about"
            style={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}
          >
            About
          </Link>
        </p>
        <p>
          <Link
            to="/project"
            style={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}
          >
            Project
          </Link>
        </p>
        <p>
          <Link
            to="/certificate"
            style={{ fontWeight: "bold", fontSize: "18px", color: "#fff" }}
          >
            Certificate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
