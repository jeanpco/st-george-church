import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialMediaContainer, LinkContainer, LogoContainer } from './styles'
import PropTypes from 'prop-types'

const SocialMedia = ({ customClassName }) => {
  const data = useStaticQuery(graphql`
    {
      SocialMedia: allCosmicjsMedias {
        nodes {
          metadata {
            facebook_link
            instagram_link
            youtube_link
            logo {
              local {
                publicURL
              }
            }
            social_media_links {
              facebook {
                url
              }
              instagram {
                url
              }
              youtube {
                url
              }
            }
          }
        }
      }
    }
  `)

  const facebookLink = data?.SocialMedia?.nodes[0]?.metadata?.facebook_link
    ? data?.SocialMedia?.nodes[0]?.metadata?.facebook_link
    : ''

  const youtubeLink = data?.SocialMedia?.nodes[0]?.metadata?.youtube_link
    ? data.SocialMedia.nodes[0].metadata.youtube_link
    : ''

  const instagramLink = data?.SocialMedia?.nodes[0]?.metadata?.instagram_link
    ? data.SocialMedia.nodes[0].metadata.instagram_link
    : ''

  const logoImg = data?.SocialMedia?.nodes[0]?.metadata?.logo?.local?.publicURL
    ? data.SocialMedia.nodes[0].metadata.logo.local.publicURL
    : ''

  const logos = []
  //
  data?.SocialMedia?.nodes[0]?.metadata?.social_media_links
    ? data.SocialMedia.nodes[0].metadata.social_media_links.map((info) => {
        Object.values(info).map((values) => {
          logos.push(values.url)
        })
      })
    : ''

  const socialMediaProps = {
    className: customClassName ? customClassName : '',
  }

  return (
    <SocialMediaContainer {...socialMediaProps}>
      <LogoContainer className="Social__Logo-Container">
        <img
          src={logoImg}
          alt="social media logo"
          className="SocialMedia__Logo"
        />
      </LogoContainer>
      <LinkContainer className="Social__Icon-Container">
        {logos?.length > 0
          ? logos.map((info, index) => {
              return (
                <Fragment key={index}>
                  <a
                    key={`SocialMediaIcons - ${index}`}
                    href={
                      index === 0
                        ? facebookLink
                        : null || index === 1
                        ? instagramLink
                        : null || index === 2
                        ? youtubeLink
                        : null
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      key={index}
                      src={info}
                      alt="social-media"
                      className="SocialMedia__Icon"
                    />
                  </a>
                </Fragment>
              )
            })
          : ''}
      </LinkContainer>
    </SocialMediaContainer>
  )
}

SocialMedia.propTypes = {
  customClassName: PropTypes.any,
}

export default SocialMedia
