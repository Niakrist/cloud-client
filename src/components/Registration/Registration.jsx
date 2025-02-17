import React from "react";
import { useState } from "react";
import { registration } from "../../actions/user";
import Button from "../../ui/Button/Button";
import InputText from "../../ui/InputText/InputText";
import styles from "./Registration.module.css";
const Registration = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    registration(data.email, data.password);
  };

  return (
    <div className={styles.registration}>
      <h2 className={styles.title}>Регистрация</h2>
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
        <Button onClick={handleRegistration}>Войти</Button>
      </form>
    </div>
  );
};

export default Registration;
