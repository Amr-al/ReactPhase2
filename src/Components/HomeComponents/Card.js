import React, { useRef, useState } from "react";
import styles from "../../CSS/HomeStyles/CardStyle.module.css" 
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {Link} from 'react-router-dom'
function Card({ data , index }) {
  const popover = (
    <Popover>
      <Popover.Body >
        {" "}
        <Link to = {`/course/${data.id}`} style = {{color:'black',textDecoration:'none'}}>
          <h5 style={{ fontWeight: "700", paddingTop: "20px" }}>
            {data.title}
          </h5>
        </Link>
        <h6 style={{ color: "green", fontSize: "12px" }}>
          Updated <b>{data.date}</b>
        </h6>
        <h6 style={{ color: "gray", fontSize: "12px" }}>
          {data.hours} total hoursAll LevelsSubtitles
        </h6>
        <h6 style={{ fontSize: "15px", fontWeight: "450" }}>{data.headline}</h6>
        <div>
          {data.tasks.map((task) => (
            <>
              <i className="fa fa-solid fa-check"> </i> {task} <br></br>
            </>
          ))}
        </div>
        <div>
          <button
            style={{
              border: "none",
              marginTop: "10px",
              width: "65%",
              padding: "15px",
              backgroundColor: "#ba55d3",
              color: "white",
              marginRight: "30px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
          <button
            style={{
              width: "50px",
              padding: "10px",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            <i className="fa fa-thin fa-heart"></i>
          </button>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className={`${styles.container} col-12 col-md-4 col-lg-3`}>
      <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
        <Link to =  {`/course/${data.id}`}>
          <div className={styles.card}>
            <img src={data.image} className={styles.course_img} />

            <h6 className={styles.card_title}>{data.title}</h6>
            <p style={{marginLeft:'0px'}}>{data.instructors[0].name}.</p>
            <span>
              {" "}
              <b>
                {parseFloat(data.rating.rating).toFixed(1)}{" "}
                <i className={`fa fa-solid fa-star ${styles.checked}`}></i>{" "}
                <i className={`fa fa-solid fa-star ${styles.checked}`}></i>{" "}
                <i className={`fa fa-solid fa-star ${styles.checked}`}></i>{" "}
                <i className={`fa fa-solid fa-star ${styles.checked}`}></i>{" "}
                <i className={`fa fa-solid fa-star-half ${styles.checked}`}></i>{" "}
              </b>
            </span>
            <span>
              {"("} {data.reviewsNumber} {")"}{" "}
            </span>
            <b style={{ display: "flex", flexWrap: "wrap" }}>
              {"E£"} {data.price}
            </b>
          </div>
        </Link>
      </OverlayTrigger>
    </div>
  );
}

export default Card;
