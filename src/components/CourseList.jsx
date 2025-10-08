import React, { useEffect, useState } from "react";
import img from "../Assests/bgimg.jpg";
import Home from "./Home";

const CourseList = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      img: img,
      name: "Html",
      Price: 199,
      Rate: 4.5,
    },
    {
      id: 2,
      img: img,
      name: "css",
      Price: 279,
      Rate: 6,
    },
    {
      id: 3,
      img: img,
      name: "Js",
      Price: 229,
      Rate: 8,
    },
    {
      id: 4,
      img: img,
      name: "React",
      Price: 229,
      Rate: 8,
    },
    {
      id: 5,
      img: img,
      name: "Bootstrap",
      Price: 229,
      Rate: 8,
    },
  ]);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  function DeleteCourse(id) {
    const newCourseList = courses.filter((course) => course.id !== id);
    setCourses(newCourseList);
  }

  const coursesList = courses.map((course) => (
    <Home
      key={course.id}
      bgimg={course.img}
      name={course.name}
      price={course.Price}
      delete={DeleteCourse}
      id={course.id}
    />
  ));
  return <>{coursesList}</>;
};

export default CourseList;
