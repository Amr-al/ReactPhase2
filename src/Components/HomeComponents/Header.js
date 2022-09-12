import React from 'react'
import myImage from "../../images/clock.png"
import styles from '../../CSS/HomeStyles/headerStyle.module.css'
function Header() {
  console.log('Header1 Render');
  return (
    <header className={styles.header_class}>
      <section className={styles.header_article}>
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </section>
      <img src={myImage}alt="clock" className = {styles.small_img} />
    </header>
  )
}

export default React.memo(Header);