import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import logoSrc from "../../assets/logo.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img className={styles.navbarLogo} src={logoSrc} alt="" />
          <div className={styles.navbarHeader}>PERN CLOUD</div>
        </div>
        <div className={styles.controlsWrapper}>
          <NavLink className={styles.navbarLogin} to="/login">
            Войти
          </NavLink>
          <NavLink className={styles.navbarRegistration} to="/registration">
            Регистрация
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
