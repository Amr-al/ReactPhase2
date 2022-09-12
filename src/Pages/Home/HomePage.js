import React from "react";
import Header from "../../Components/HomeComponents/Header";
import Main from "../../Components/HomeComponents/Main";
import FooterMain from "../../Components/HomeComponents/FooterMain";
function HomePage({ Loading, APIData, Courses, Description }) {
  console.log("Home Rendered");
  return (
    <>
      <Header></Header>
      {
        Loading?<i className="fa fa-sharp fa-solid fa-spinner fa-5x" style={{marginTop:'10%',marginLeft:'40%'}}></i>:
        <Main
          APIData={APIData}
          Courses={Courses}
          Description={Description}
        ></Main>
      }
      <FooterMain></FooterMain>
    </>
  );
}

export default React.memo(HomePage);
