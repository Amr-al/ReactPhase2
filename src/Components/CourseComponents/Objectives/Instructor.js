import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {FaMedal} from "react-icons/fa";
import Styles from "../../../CSS/CoursePageStyles/ObjectivesStyles/InstructorStyle.module.css";

function Instructor({instructor}) {
    const [showMore, setShowMore] = useState(true);

  return (
    <div className={Styles.Instructor}>
      <Link to="" className={Styles.InstructorName}>{instructor.name}</Link>
      <p className={Styles.InstructorJob}>
        {instructor.jop}
      </p>
      <div>
        <img
          src={instructor.image}
          alt="inctructor"

          className={Styles.InstructorImage}
        />
        <div className={Styles.InstructorRating}>
          <span>
            <i className="fa fa-solid fa-star" />
            <span> {instructor.rating} Instructor Rating</span>
            <br />
          </span>
          <span>
          <FaMedal icon="fa-solid fa-medal" />{" "}
            <span> {instructor.reviews} Reviews</span>
            <br />
          </span>

          <span>
            <i className="fa fa-solid fa-user"></i>{" "}
            <span> {instructor.students} Students</span>
            <br />
          </span>
          <span>
            <i className="fa fa-play-circle" />{" "}
            <span> {instructor.courses} Courses</span>
            <br />
          </span>
          <br></br>
        </div>

        {instructor.story.map((story, index) => {
          return (
            <p style={{fontSize: "smaller" }} key={index}>
              {story}
            </p>
          );
        })}
        {!showMore ? (
            <div>
              {instructor.moreStory.map((story, index) => {
                return <p style={{fontSize: "smaller" }} key={index}>{story}</p>;
              })}
            </div>
        ) : (
          <></>
        )}
        <button style={{border:"none",
            backgroundColor:"white",
            color:"#af5ac4",
            fontWeight: "700",
            padding: "0"}}
          onClick={() => setShowMore((pre) => !pre)}
        >
          {showMore ? (
            <>
              Show more{" "}
              <i className="fa fa-sharp fa-solid fa-caret-down" />
            </>
          ) : (
            <>
              Show less{" "}
              <i className="fa fa-sharp fa-solid fa-caret-up" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Instructor;
