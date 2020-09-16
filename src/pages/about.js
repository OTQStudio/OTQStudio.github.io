import React from 'react'

import Bio from "../components/bio"

//import Bio from "../components/bio"
import Layout from '../components/layout'
import SEO from "../components/seo"
//import { rhythm } from "../utils/typography"
import '../styles/layout.scss'

const DiaryPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="About" />
      <div id="about">
      <h2 className="pageTitle">About</h2>
      <Bio />
      <h3>List of OTQ Blogs</h3>
      <ul>
        <li>→ <a href="https://en.otqstudio.com">OTQ Blog in English</a></li>
        <li>→ <a href="https://ja.otqstudio.com">OTQ Blog in Japanese</a></li>
      </ul>
      </div>
    </Layout>
  )

}

export default DiaryPage
