import React, { useContext, useRef } from "react";
import { FaSearch, FaGlobeAmericas, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../CSS/NavigationStyle.module.css";
import useScroll from "../hooks/useScroll"
import { useNavigate } from "react-router-dom";
const imglink =
  "https://cdn2.downdetector.com/static/uploads/logo/UDEMY_3_0KKraw2.png";
const Navigation = ({ setCheck }) => {
  const ref = useRef(null);
  let navigate = useNavigate();
  function searchPrevent(event) {
    event.preventDefault();
    setCheck(ref.current.value);
    navigate("../");
  }
  const position = useScroll();
  const check = window.location.href.includes("course");
  return (
    <nav
      className={styles.nav_view}
      style={{ display: position > 37 && check ? "none" : "" }}
    >
      <div className={styles.menu}>
        <div></div> <div></div> <div></div>
      </div>
      <Link to="/">
        <img className={styles.logo} src={imglink} alt="logo" />
      </Link>

      <Link to="Categories" className={styles.nav_link}>
        Categories
      </Link>

      <div className={styles.search_bar}>
        <form
          className={styles.search_form}
          action="GET"
          onSubmit={searchPrevent}
        >
          <button type="submit" className={styles.submit_btn}>
            <FaSearch></FaSearch>
          </button>
          <input
            id={styles.search_input}
            ref={ref}
            type="text"
            name="search_text"
            placeholder="Search for anything"
          />
        </form>
      </div>
      <Link to="#" className={styles.nav_link} id={styles.lnk1}>
        Udemy Businesses
      </Link>
      <Link to="#" className={styles.nav_link} id={styles.lnk2}>
        Teach on Udemy
      </Link>
      <Link to="#" className={styles.nav_link} id={styles.lnk3}>
        <FaShoppingCart className={styles.cartIcon} />
      </Link>

      <button className={`${styles.Login_btn} ${styles.btn_box}`}>
        Log in
      </button>
      <button
        className={` ${styles.Sign_btn} ${styles.btn_box} ${styles.specialbtn}`}
      >
        Sign up
      </button>
      <button
        className={`${styles.global_btn} ${styles.btn_box} ${styles.globalIcon}`}
      >
        <FaGlobeAmericas className={styles.global}></FaGlobeAmericas>
      </button>
    </nav>
  );
};
export default React.memo(Navigation);
