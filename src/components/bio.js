/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons'

//import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            facebook
            github
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="profile">
      <div className="flex">
          <Image fixed={data.avatar.childImageSharp.fixed} alt={author.name}/>
          <div>
              <strong>{author.name}</strong>
              <ul className="snsAccounts">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Japan
                </li>
                <li>
                  <a href={`https://facebook.com/${social.facebook}`}><FontAwesomeIcon icon={faFacebookF} aria-label="Facebook Brand Icon"/></a>
                </li>
                <li>
                  <a href={`https://twitter.com/${social.twitter}`}><FontAwesomeIcon icon={faTwitter} aria-label="Twitter Brand Icon" /></a>
                </li>
                <li>
                  <a href={`https://instagram.com/${social.instagram}`}><FontAwesomeIcon icon={faInstagram} aria-label="Instagram Brand Icon" /></a>
                </li>
              </ul>
          </div>
      </div>
      <p>One of my business goals is to live off by planning, creating and providing services which are known and used among people all over the world.</p>
    </div>
  )
}

export default Bio
