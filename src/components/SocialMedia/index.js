import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialMediaContainer } from './styles'
import PropTypes from 'prop-types'

const SocialMedia = ({ customClassName }) => {
  const data = useStaticQuery(graphql`
    {
      SocialMedia: allCosmicjsMedia {
        nodes {
          locale
          metadata {
            social_media_links {
              facebook {
                url
              }
              instagram {
                url
              }
            }
          }
        }
      }
    }
  `)

  const socialMediaProps = {
    className: customClassName ? customClassName : '',
  }

  return (
    <SocialMediaContainer {...socialMediaProps}>
      {data.SocialMedia.nodes[0].metadata.social_media_links.map(
        (info, index) => {
          return (
            <a
              key={`SocialMediaIcons - ${index}`}
              href="www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Object.values(info).map((values, index) => {
                return (
                  <img
                    key={index}
                    src={values.url}
                    alt="social-media"
                    className="SocialMedia__Icon"
                  />
                )
              })}
            </a>
          )
        }
      )}
    </SocialMediaContainer>
  )
}

SocialMedia.propTypes = {
  customClassName: PropTypes.any,
}

export default SocialMedia
