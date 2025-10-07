import React, { useEffect, useState } from "react";
// import img from "../Assests/bgimg.jpg";
import "./style.css";

const Home = (props) => {
  const [purchase, setPurchase] = useState(false);

  function Buynow() {
    setPurchase(true);
  }

  return (
    props.name && (
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
        <button onClick={() => Buynow()} style={{ padding: "10px 20px" }}>
          Buy Now
        </button>
        <button
          onClick={() => props.delete(props.id)}
          style={{ padding: "10px 20px" }}
        >
          Delete Course
        </button>
        <p>{purchase ? `Purchase Completed` : "Buy It Soon"}</p>
      </div>
    )
  );
};

export default Home;
