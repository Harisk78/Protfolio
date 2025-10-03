import React from "react";
import bgimg from "../Assests/bgimg.jpg";
import "./style.css";

const Home = (props) => {
  return (
    <div className="card" style={{ display: "inline-block" }}>
      <img src={props.bgimg} alt="Background" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
};

export default Home;
