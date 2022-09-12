import React, { useContext } from "react";
import styles from "../../CSS/HomeStyles/MainStyle.module.css" 

import { FunctionContext } from "../../App";
function CreateHeadLinks() {
  const changeTab = useContext(FunctionContext);

  const inlineStyle_h1 = {
    fontSize: "40px",
    marginLeft: "-3%",
    fontWeight: "600",
  };
  const inlineStyle_ul = { marginLeft: "-5%", fontWeight: "200" };
  return (
    <div className={styles.main_class}>
      <h1 style={inlineStyle_h1}>A broad selection of courses</h1>
      <p style={{ marginLeft: "-2%" }}>
        Choose from 185,000 online video courses with new additions published
        every month
      </p>
      <ul className={styles.nav} style={inlineStyle_ul}>
        <li className={styles.nav_item}>
          <a
            className={` ${styles.nav_link} ${styles.active}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("python");
            }}
          >
            Python
          </a>
        </li>
        <li className={styles.nav_item}>
          <a
            className={styles.nav_link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("excel");
            }}
          >
            Excel
          </a>
        </li>
        <li className={styles.nav_item}>
          <a
            className={`${styles.nav_link} abled`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("webdevelopment");
            }}
          >
            Web Development
          </a>
        </li>
        <li className={styles.nav_item}>
          <a
            className={`${styles.nav_link} abled`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("javascript");
            }}
          >
            JavaScript
          </a>
        </li>
        <li className={styles.nav_item}>
          <a
            className={`${styles.nav_link} abled`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("datascience");
            }}
          >
            Data science
          </a>
        </li>
        <li className={styles.nav_item}>
          <a
            className={`${styles.nav_link} abled`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("awscertification");
            }}
          >
            AWS Certification
          </a>
        </li>
        <li className={styles.nav_item}>
          <a
            className={`${styles.nav_link} abled`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changeTab("drawing");
            }}
          >
            Drawing
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CreateHeadLinks;
