import React from "react";
import styles from "../../../CSS/CoursePageStyles/ObjectivesStyles/Reviews.module.css";
function Reviews({ APIData }) {
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
    <div>
        {APIData.reviews.map((review,index)=>{
            return(
                <div key={index} style={{marginTop:'50px'}}>
        <div className={styles.person}>
          {review.name[0]}
          {review.name.includes(" ")
            ? review.name[review.name.search(" ") + 1]
            : ""}
        </div>
        <span className={styles.comment}>
          <span className={styles.reviewname}>{review.name}</span>{" "}
          <br />
          <span className={styles.reviewrate}>{Rate(review.rate)} <b style={{fontWeight:"lighter"}}>{review.date}</b></span>
          <br />
          <div className={styles.commentcontent}>{review.content}</div>
          <div className={styles.helpful}>
            Was this review helpful?
          </div>
          <div className={styles.like}>
            <i
              className="fa fa-light fa-thumbs-up"
              
            ></i>
            <i
              className="fa fa-light fa-thumbs-down"
              
            ></i>
            <span style={{textDecoration:'underline'}}>Report</span>
          </div>
        </span>
      </div>
            );
        })
    }
      
    </div>
  );
}

export default Reviews;
