import React from "react"
import * as style from "./button.module.scss"
// import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
const Button = props => <button className={style.btn}>{props.children}</button>

export default Button
