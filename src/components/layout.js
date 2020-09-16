import React from "react"
//import { Link } from "gatsby"

//import { rhythm, scale } from "../utils/typography"
import '../styles/layout.scss'
import Header from "../components/header"

const Layout = ({ location, title, children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <p><small>© OTQ</small></p>
      </footer>
    </div>
  )
}

export default Layout
