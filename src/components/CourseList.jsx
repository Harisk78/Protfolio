import React from "react";
import img from "../Assests/bgimg.jpg";
import Home from "./Home";

const CourseList = () => {
  let courses = [
    {
      img: img,
      name: "Html",
      Price: 199,
      Rate: 4.5,
    },
    {
      img: img,
      name: "css",
      Price: 279,
      Rate: 6,
    },
    {
      img: img,
      name: "Js",
      Price: 229,
      Rate: 8,
    },
    {
      img: img,
      name: "React",
      Price: 229,
      Rate: 8,
    },
    {
      img: img,
      name: "Bootstrap",
      Price: 229,
      Rate: 8,
    },
  ];
  const coursesList = courses.map((course) => (
    <Home
      bgimg={course.img}
      name={course.name}
      price={course.Price}
      Rate={course.Rate}
    />
  ));
  return <>{coursesList}</>;
};

export default CourseList;
