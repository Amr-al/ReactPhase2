import React, { useState, useEffect } from "react";
import axios from "axios";
import Objectives from "../../Components/CourseComponents/Objectives/Objectives";
import Header2 from "../../Components/CourseComponents/Header2";
import Footer2 from "../../Components/CourseComponents/Footer2";
import CourseCard from "../../Components/CourseComponents/CourseCard";
import { PageContext } from "../../App";
import { useContext } from "react";
function Page2({APIData}) {
  const page = useContext(PageContext);
  console.log(page);
  const [course,setcourse] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(page);
    let index = 0;
    if (window.location.href[window.location.href.length - 2] !== "/") {
      index = window.location.href[window.location.href.length - 2];
      index += window.location.href[window.location.href.length - 1];
    } else {
      index = window.location.href[window.location.href.length - 1];
    }
    console.log(index - 1);
    console.log(APIData[index])
    setcourse(APIData[index-1]);
    setLoading(false);
  });
  if (loading) return <h1>LOADING....</h1>;
  return (
    <>
      <Header2 course={course} />
      <CourseCard course={course}></CourseCard>
      <Objectives course={course} />
      <Footer2 />
    </>
  );
}
export default React.memo(Page2);
