import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Styles from "../../../CSS/CoursePageStyles/ObjectivesStyles/content.module.css";
import Accordion from "react-bootstrap/Accordion";

function CourseContent({ lecture }) {
  return (
    <div>
       <Accordion className={Styles.Accord}>
      <Accordion.Item eventKey="0" className={Styles.Item}>
        <Accordion.Header>
          {lecture.title}
          <span className={Styles.accheader}>{lecture.lectures} lectures.{lecture.time}</span>
          </Accordion.Header>
        <Accordion.Body className={Styles.Item}>
        {lecture.videos.map((video,index) => {
              return (
                <Card body className={Styles.LectureCard} key={index}>
                    {
                          video.time[2]==":"?<i className="fa fa-play-circle" />
                          :<i className="fa fa-file-o"></i>
                    } &nbsp; {video.title}
                    <span className={Styles.time}>{video.time}</span>
                </Card>
              );
            })}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
     
    </div>
  );
}

export default CourseContent;
