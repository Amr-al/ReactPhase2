import React, { useState } from "react";
import CourseContent from "../Objectives/CourseContent"//CourseContent";
import Styles from "../../../CSS/CoursePageStyles/ObjectivesStyles/content.module.css";

function Content({ course }) {
  const [showMore, setShowMore] = useState(true);
  return (
    <>
      <div>
        {course.sections} sections • {course.lectures} lectures •{" "}
        {course.totalLength} total length
      </div>
      {course.content.map((lecture, index) => (
        <CourseContent key={index} lecture={lecture} />
      ))}
      {!showMore ? (
        <div>
          {course.moreContent.map((lecture, index) => (
        <CourseContent key={index} lecture={lecture} />
      ))}
        </div>
      ) : (
        <button className={Styles.MoreContentBtn} onClick={() => setShowMore((pre) => !pre)}>
        {course.moreContent.length} more sections <i className="fa fa-sharp fa-solid fa-caret-down" />
       </button>
      )}
     
    </>
  );
}

export default Content;
