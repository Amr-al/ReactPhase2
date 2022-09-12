import React, { useState } from "react";
import Styles from "../../../CSS/CoursePageStyles/ObjectivesStyles/ObjectivesStyle.module.css";
import { Link } from "react-router-dom";
import Instructor from "../Objectives/Instructor"//Instructor";
import Content from "../Objectives/Content"//Content";
import Reviews from "../Objectives/Reviews"//Reviews";
import { FaSearch } from "react-icons/fa";
import StudentFeedback from "./StudentFeedback";

function Objectives({ course }) {
  console.log("obj");

  const [showMore, setShowMore] = useState(true);
  return (
    <>
      <div className={Styles.fixed}>
        <h6>{course.title}</h6>
        <p>
          <strong>{parseFloat(course.rating.rating).toFixed(1)}</strong>{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <Link to={`/course/${course.id}`}>
            ({course.reviewsNumber} ratings)
          </Link>
          {" " + course.studentsNumber} students
        </p>
      </div>
      <div className={Styles.nav}>
        <a href="#" id = "#whatlearn">Overview</a>
        <a href="#" id ="#content">Curriculum</a>
        <a href="#" id ="#instructors">Instructor</a>
        <a href="#" id ="#reviews">Reviews</a>
      </div>
      <div className={Styles.content}>
        <div className={Styles.whatLearn} id="whatlearn">
          <h4>What you'll learn</h4>
          <div className={Styles.container}>
            {course.tasks.map((task, index) => {
              return (
                <span key={index}>
                  <i className="fa fa-thin fa-check" />
                  &nbsp;
                  <i>{task}</i>
                </span>
              );
            })}
          </div>
        </div>
        <h4 className={Styles.h4content} id="content">
          Course content
        </h4>
        <Content course={course} />
        <h4 className={Styles.h4content}>Requirements</h4>
        <ul className={Styles.requirements}>
          {course.requirements.map((req, index) => {
            return <li key={index}>{req}</li>;
          })}
        </ul>
        <h4 className={Styles.h4content}>Description</h4>
        {course.description.map((des, index) => {
          return (
            <p style={{ fontSize: "smaller" , marginLeft:'0px'}} key={index}>
              {des}
            </p>
          );
        })}
        {!showMore ? (
          <>
            <div>
              {course.moreDescription.map((des, index) => {
                return (
                  <p style={{ fontSize: "smaller", marginLeft:'0px' }} key={index}>
                    {des}
                  </p>
                );
              })}
            </div>
            <h4 className={Styles.h4content}>Who this course is for:</h4>
            <ul className={Styles.requirements}>
              {course.whofor.map((who, index) => {
                return (
                  <li style={{ fontSize: "smaller" }} key={index}>
                    {who}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <></>
        )}
        <button
          className={Styles.more}
          onClick={() => setShowMore((pre) => !pre)}
        >
          {showMore ? (
            <>
              Show more <i className="fa fa-sharp fa-solid fa-caret-down" />
            </>
          ) : (
            <>
              Show less <i className="fa fa-sharp fa-solid fa-caret-up" />
            </>
          )}
        </button>
        <h4 className={Styles.h4content} id="instructors">
          Instructors
        </h4>

        {course.instructors.map((instructor, index) => {
          return <Instructor key={index} instructor={instructor} />;
        })}
        <h4 className={Styles.h4content}>Student feedback</h4>
        <StudentFeedback rating={course.rating} />
        <h4 className={Styles.h4content} id="reviews">
          Reviews
        </h4>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            placeholder="Search Reviews"
            type="text"
            className={Styles.serchInput}
          ></input>
          <button className={Styles.btn}>
            <FaSearch style={{ color: "white", margin: "auto" }} />
          </button>
          <select id="comments" className={Styles.selection}>
            <option value="All Rating">All Rating</option>
            <option value="Five Stars">Five Stars</option>
            <option value="Four Stars">Four Stars</option>
            <option value="three Stars">three Stars</option>
            <option value="Two Stars">Two Stars</option>
            <option value="One Star">One Star</option>
          </select>
        </form>
        <Reviews APIData={course} />
      </div>
    </>
  );
}

export default Objectives;
