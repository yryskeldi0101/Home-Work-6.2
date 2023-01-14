import React from 'react'
import style from  "./FormInput.module.css"


const FormInput = ({ id, value, labelName, placeholder, inputType, onChange}) => {
  return (
    <div className={style.div_block}>
      <label className={style.label}  htmlFor={id}>{labelName}</label>
      <input className={style.input} value={value} placeholder={placeholder || "..."} id={id} type={inputType} onChange={onChange}/>
    </div>
  )
}

export default FormInput