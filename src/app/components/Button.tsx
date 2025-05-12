import React, { ButtonHTMLAttributes } from "react";
import styles from './Button.module.css'
const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={styles.buttonContainer} {...props}>{children}</button>;
};
export default Button;
