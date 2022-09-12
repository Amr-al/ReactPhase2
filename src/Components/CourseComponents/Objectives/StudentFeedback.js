import React from "react";
import Styles from "../../../CSS/CoursePageStyles/ObjectivesStyles/studentFeedback.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function StudentFeedback({ rating }) {
  const Rate = (num) => {
    if (num === "1")
      return (
        <>
          {" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />
        </>
      );
    if (num === "2")
      return (
        <>
          {" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />
        </>
      );
    if (num === "3")
      return (
        <>
          {" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />
        </>
      );
    if (num === "4")
      return (
        <>
          {" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star-o" style={{ color: "#CD7F32" }} />
        </>
      );
    if (num === "5")
      return (
        <>
          {" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />{" "}
          <i className="fa fa-solid fa-star" style={{ color: "#CD7F32" }} />
        </>
      );
  };
  return (
    <div className="row">
      <div className={`col-2 ${Styles.rating}`}>
        <h1>{rating.rating}</h1>
        <i className="fa fa-solid fa-star" />{" "}
        <i className="fa fa-solid fa-star" />{" "}
        <i className="fa fa-solid fa-star" />{" "}
        <i className="fa fa-solid fa-star" />{" "}
        <i className="fa fa-solid fa-star-half-empty" />
        <p>Course Rating</p>
      </div>
      <div className="col-6">
        <ProgressBar
          className={Styles.progress}
          variant="secondary"
          now={rating.fivestars}
        />
        <ProgressBar
          className={Styles.progress}
          variant="secondary"
          now={rating.fourstars}
        />
        <ProgressBar
          className={Styles.progress}
          variant="secondary"
          now={rating.threestars}
        />
        <ProgressBar
          className={Styles.progress}
          variant="secondary"
          now={rating.twostars}
        />
        <ProgressBar
          className={Styles.progress}
          variant="secondary"
          now={rating.onestar}
        />
      </div>
      <div className={`col-4 ${Styles.stars}`}>
        <div className="mb-1">
          {Rate("5")} <Link to="">{rating.fivestars}%</Link>
        </div>
        <div className="mb-1">
          {Rate("4")} <Link to="">{rating.fourstars}%</Link>
        </div>
        <div className="mb-1">
          {Rate("3")} <Link to="">{rating.threestars}%</Link>
        </div>
        <div className="mb-1">
          {Rate("2")} <Link to="">{rating.twostars}%</Link>
        </div>
        <div className="mb-1">
          {Rate("1")} <Link to="">{rating.onestar}%</Link>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
