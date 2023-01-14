import React from 'react'
import style from "./Button.module.css"


const Button = ({onClick,disabled,title}) => {
  return <button className={style.mainBtn} onClick={onClick} disabled={disabled}>{title}</button>;

}

export default Button