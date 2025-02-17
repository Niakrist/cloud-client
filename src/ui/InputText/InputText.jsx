import React from "react";

import styles from "./InputText.module.css";

const InputText = ({
  placeholder,
  id,
  type,
  name,
  value,
  onChange,
  ...props
}) => {
  return (
    <>
      <input
        id={id}
        {...props}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}></label>
    </>
  );
};

export default InputText;
