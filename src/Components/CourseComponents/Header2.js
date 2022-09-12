import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../CSS/CoursePageStyles/Header2.module.css";
import {PageContext} from '../../App'
import { useContext } from "react";
function Header2({  course }) {
  const page = useContext(PageContext);
  console.log('HEAR2 RENDERED');
  return (
    <div className={Styles.header}>
      <Link to="/course" className="bold noline">
        Development
      </Link>{" "}
      &nbsp; &gt; &nbsp;
      <Link to="/course" className="bold noline">
        Programming Languages
      </Link>{" "}
      &nbsp; &gt; &nbsp;
      <Link to="/course" className="bold noline">
        {page}
      </Link>
      <h2 className="">{course.title}</h2>
      <h5>{course.headline}</h5>
      <div className={Styles.small}>
        <span className={Styles.rating}>
          <strong>{parseFloat(course.rating.rating).toFixed(1)}</strong>{" "}
          <i className="fa fa-solid fa-star"></i>{" "}
          <i className="fa fa-solid fa-star"></i>{" "}
          <i className="fa fa-solid fa-star"></i>{" "}
          <i className="fa fa-solid fa-star"></i>{" "}
          <i className="fa fa-solid fa-star-half"></i>{" "}
        </span>
        <a href="index.html">({course.reviewsNumber} ratings)</a>
        {" " + course.studentsNumber} students
      </div>
      <div>
      Created by <a href="index.html">{course.instructornames}</a>
      </div>
      <div className={Styles.lasthead}>
        <i className="fa fa-certificate"></i> <span>Last updated </span>
        {course.date}{" "}
        <i class="fa fa-light fa-globe"></i>
       {" "}
        English <i className="fa fa-cc"></i> English
      </div>
    </div>
  );
}

export default React.memo(Header2);
