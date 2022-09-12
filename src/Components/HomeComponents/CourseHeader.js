import React from "react";
import styles from "../../CSS/HomeStyles/MainStyle.module.css";

function CourseHeader (props){
  console.log('Course Header');
  console.log(props.name);
  return (
    <div className={styles.Description}>
      <h1 style={{fontWeight:'600',fontSize:'35px'}}>{props.head}</h1>
      <p>{props.description}</p>
      <button className={styles.course_btn}> Explore {props.name} </button>
    </div>
  );
};

export default CourseHeader;
