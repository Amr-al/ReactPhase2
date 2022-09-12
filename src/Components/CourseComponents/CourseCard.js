import React from "react";
import Styles from "../../CSS/CoursePageStyles/courseCard.module.css";
import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
function CourseCard({ course }) {
  console.log('Course Card Rendered');
  const position = useScroll();
  return (
    <div
      className={Styles.coursecard}
      style={{ top: position > 100 ? "-188px" : "130px",display: position > 3000?'none':'' }}
    >
      <div className="card">
        <img className="card-img-top" src={course.image} alt="Card image" />
        <div className={`card-img-overlay ${Styles.imagecard}`}>
          <i className="fa fa-play-circle fa-4x" />
          <h6 className={Styles.preview}>Preview this course</h6>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title" style={{ fontWeight: "bold" }}>
            E£{course.price}
          </h1>
          <button className={Styles.tocart} style={{ marginLeft: "0px" }}>
            <Link to="">Add to cart</Link>
          </button>
          <button className={Styles.tobuy} style={{ marginLeft: "0px" }}>
            <Link to="">Buy now</Link>
          </button>
          <p className={Styles.moneyback} style={{ marginLeft: "0px" }}>
            30-Day Money-Back Guarantee
          </p>
          <p className={Styles.boldcard} style={{ marginLeft: "0px" }}>
            This course includes:
          </p>
          <div className={Styles.icons}>
            <p>
              <i className="fa fa-youtube-play"></i> {course.hours} hours
              on-demand video
            </p>
            <p>
              <i className="fa fa-file-o"></i> {course.articles} article
            </p>
            <p>
              <i className="fa fa-folder-o"></i> {course.resources} downloadable
              resources
            </p>
            <p>
              <i
                className="fa fa-skyatlas"
                style={{ marginLeft: "-2px", marginRight: "2px" }}
              ></i>{" "}
              Full lifetime access
            </p>
            <p>
              <i
                className="fa fa-mobile fa-lg"
                style={{ marginLeft: "2px", marginRight: "-2px" }}
              ></i>{" "}
              Access on mobile and TV
            </p>
            <p>
              <i className="fa fa-trophy"></i> Certificate of completion
            </p>
          </div>
          <div className={Styles.links}>
            <Link to="">Share</Link>
            <Link to="">Gift this course</Link>
            <Link to="">Apply Coupon</Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className={Styles.boldcard}>Training 5 or more people?</h5>
          <h6 style={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}>
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </h6>
          <button className={`${Styles.tobuy} ${Styles.boldcard}`}>
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
