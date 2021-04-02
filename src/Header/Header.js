import React from "react";
import { Component } from "react";
import styles from "./Header.module.css";
import Landie from "./Landie.svg";
class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navlinks}>
          <a className={styles.link}>Home</a>
          <a className={styles.linka}>About</a>
          <a className={styles.link}>Contact</a>
        </div>
        <div className={styles.logo}>
          <img src={Landie} className={styles.Landie}></img>
        </div>
        <div className={styles.button}>Buy Now</div>
      </div>
    );
  }
}
export default Header;
