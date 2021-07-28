import * as React from "react"
import { Link } from "gatsby"
import contentJson from "../content/content.json"
import Button from "../components/button/button"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import style from "../styles/style.scss"
import style_responsive from "../styles/style_responsive.scss"

const IndexPage = () => (
  <main>
    <header className="header_container">
      <div className="header_content">
        <h1 className="">{contentJson.content.homePage.all_need}</h1>
      </div>
      <p>{contentJson.content.homePage.features}</p>
    </header>
    <div className="btn-login">
      <Link to="login">
        <Button>{contentJson.content.homePage.login}</Button>
      </Link>
      <Link to="signup">
        <Button>{contentJson.content.homePage.Sign_up}</Button>
      </Link>
    </div>
  </main>
)

export default IndexPage
