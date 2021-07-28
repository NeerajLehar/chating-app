import React from "react"
import * as style from "./input.module.scss"
const Input = props => (
  <div className={style.inputWrapper}>
    <input
      className={style.input}
      placeholder={props.placeholder}
      type={props.type}
      id="fName"
      required
    />
    <label htmlFor="fname">{props.children}</label>
  </div>
)

export default Input
