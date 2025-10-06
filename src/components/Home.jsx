import React from "react";
// import img from "../Assests/bgimg.jpg";
import "./style.css";

const Home = (props) => {
  return (
    <div
      className="card"
      style={{
        display: "inline-block",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "10px",
      }}
    >
      <img src={props.bgimg} alt="Background" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.Rate}</p>
      <button
        style={{
          padding: "10px 20px",
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default Home;
