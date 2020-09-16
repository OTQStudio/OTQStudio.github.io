import React from "react"
import { Link } from "gatsby"

import '../styles/layout.scss'

const Header = ({ title,props }) => {
  let header
  let nav


  nav = (
    <nav id="globalNav">
      <div className="navContent">
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/projects/">Project</Link></li>
          <li><Link to="/about/">About</Link></li>
        </ul>
      </div>
    </nav>
  )

  header = (
    <h1 className="siteTitle">
      <Link to={`/`}>
        OTQ Studio
      </Link>
    </h1>
  )

  return (
    <header className="flex">
       {header}
       {nav}
    </header>
  )
}

export default Header
