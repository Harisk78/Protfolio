import React from "react";

const Home = (props) => {
  let { name, age, car } = props.userData;
  return (
    <div>
      Home
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{car}</h1>
    </div>
  );
};

export default Home;
