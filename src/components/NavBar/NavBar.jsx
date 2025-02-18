import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import logoSrc from "../../assets/logo.svg";
import { logOut } from "../../store/userSlice/userSlice";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img className={styles.navbarLogo} src={logoSrc} alt="" />
          <div className={styles.navbarHeader}>PERN CLOUD</div>
        </div>

        <div className={styles.controlsWrapper}>
          {!isAuth ? (
            <>
              <NavLink className={styles.navbarLogin} to="/login">
                Войти
              </NavLink>
              <NavLink className={styles.navbarRegistration} to="/registration">
                Регистрация
              </NavLink>
            </>
          ) : (
            <NavLink
              onClick={() => dispatch(logOut())}
              className={styles.navbarRegistration}
              to="/">
              Выйти
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
