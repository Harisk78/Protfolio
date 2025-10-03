import React from "react";
import img from "./Assests/bgimg.jpg";

const CourseList = () => {
  let courses = [
    {
      name: "Html",
      imgsrc: { img },
      Price: 199,
      Rate: 4.5,
    },
  ];
  courses.map((course) => {
    <CourseList
      name={course.name}
      bgimg={course.imgsrc}
      Price={course.Price}
      Rate={course.Rate}
    />;
  });
  return <CourseList />;
};

export default CourseList;
