import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'
import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            homepage_hero {
              local {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const siteTitle = data.cosmicjsSettings.metadata.site_heading
      const homgePageHero =
        data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
      let header

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __dirname !== `undefined` && __dirname) {
        rootPath = __dirname + `/`
        postsPath = __dirname + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        header = (
          <BackgroundImage
            Tag="div"
            className="post-hero"
            fluid={homgePageHero}
            backgroundColor={`#007ACC`}
            style={{
              position: 'relative',
            }}
          >
            <h1
              style={{
                position: 'absolute',
                textAlign: 'center',
                left: 0,
                right: 0,
                top: 0,
                marginTop: '0',
                height: 200,
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h1>
          </BackgroundImage>
        )
      } else {
        header = (
          <h3
            style={{
              marginTop: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h3>
        )
      }
      return (
        <div>
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
          <footer
            style={{
              textAlign: 'center',
              padding: `0 20px 80px 0`,
            }}
          >
            powered by&nbsp;
            <a
              rel="noopener noreferrer" 
              target="_blank"
              href="https://gatsbyjs.org"
              style={{
                color: '#191919',
                boxShadow: 'none',
              }}
            >
              <img
                src={gatsbyLogo}
                alt="Gatsby JS"
                style={{
                  width: '20px',
                  margin: '0 4px -3px 2px',
                }}
              />
              <strong>Gatsby</strong>
            </a>
            &nbsp;and&nbsp;
            <a
              rel="noopener noreferrer" 
              target="_blank"
              href="https://cosmicjs.com"
              style={{
                color: '#191919',
                boxShadow: 'none',
              }}
            >
              <img
                src={cosmicjsLogo}
                alt="Cosmic JS"
                style={{
                  width: '18px',
                  margin: '0 4px -2px 5px',
                }}
              />
              <strong>Cosmic JS</strong>
            </a>
          </footer>
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default Layout;