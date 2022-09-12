import React, { useContext } from "react";
import styles from "../../CSS/HomeStyles/MainStyle.module.css";
import CourseHeader from "../HomeComponents/CourseHeader"
import Card from "../HomeComponents/Card";
import {CheckContext} from "../../App";
import CreateHeadLinks from "../HomeComponents/CreateHeadLinks";
function Main({ APIData, Courses, Description }) {
  const check = useContext(CheckContext);
  console.log("Main Rendered");
  return (
    <>
      <main>
        <div className={styles.main_class}>
          <CreateHeadLinks></CreateHeadLinks>
          <section className={styles.CourseContainer}>
            <div className={styles.courseDescription}>
              <CourseHeader
                head={Description.header}
                name={Description.name}
                description={Description.description}
              ></CourseHeader>
            </div>
            <div className={`${styles.cards_wrapper} row`}>
                { check == ""
                  ? APIData.map((course, index) => (
                      <Card key={index} data={course}></Card>
                    ))
                  : Courses.map((course, index) => (
                      <Card key={index} data={course}></Card>
                    ))}
            </div>
            <br></br>
          </section>
        </div>
      </main>
    </>
  );
}

export default Main;
