import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/userSlice/userSlice";

import Button from "../../ui/Button/Button";
import InputText from "../../ui/InputText/InputText";

import styles from "./Login.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const { errorUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email: data.email, password: data.password }));
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Авторизация</h2>
      <form className={styles.form}>
        <InputText
          id="email"
          name={"email"}
          type={"email"}
          value={data.email}
          onChange={handleChange}
          placeholder={"Введите email..."}
        />
        <InputText
          id="password"
          name={"password"}
          type={"password"}
          value={data.password}
          onChange={handleChange}
          placeholder={"Введите пароль..."}
        />
        <Button onClick={handleLogin}>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
