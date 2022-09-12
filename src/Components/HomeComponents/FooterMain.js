import React from 'react'
import styles from "../../CSS/HomeStyles/FooterStyle.module.css"
function FooterMain() {
  console.log('Footer1 Rendered');
    const LinkArray = [{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
      },{
        image:"https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
      }]
  return (
    <footer className={styles.footer}>
      <div className="row">
        <h1 className="mt-5 mb-5">Top Categories</h1>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[0].image} alt="design" />
          <p style={{fontWeight: 'bold'}}>Design</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[1].image}  alt="development"/>
          <p style={{fontWeight: 'bold'}}>Development</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[2].image}  alt="marketing"/>
          <p style={{fontWeight: 'bold'}}>Marketing</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[3].image} 
            alt="it-and-software" />
          <p style={{fontWeight: 'bold'}}>IT and Software</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[4].image} 
            alt="personal-development" />
          <p style={{fontWeight: 'bold'}}>Personal Development</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[5].image}  alt="business"/>
          <p style={{fontWeight: 'bold'}}>Business</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[6].image}  alt="photography"/>
          <p style={{fontWeight: 'bold'}}>Photography</p>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <img src={LinkArray[7].image}  alt="music"/>
          <p style={{fontWeight: 'bold'}}>Music</p>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(FooterMain)