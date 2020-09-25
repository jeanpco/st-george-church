import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialMediaContainer, LinkContainer, LogoContainer } from './styles'
import PropTypes from 'prop-types'
import LocaleContext from '../../context/LocaleProvider'

const SocialMedia = ({ customClassName }) => {
  const data = useStaticQuery(graphql`
    {
      social_media: allPrismicSocialMedia {
        nodes {
          lang
          data {
            body {
              items {
                social_link {
                  url
                }
                social_media_icon {
                  url
                }
              }
              primary {
                social_media_logo {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const socialMediaData = data?.social_media?.nodes
    ? data.social_media.nodes
        .filter((node) => node.lang === i18n.locale)
        .map((r) => r.data)
    : ''

  const socialMediaLocal = socialMediaData[0]

  const logoImg = socialMediaLocal.body[0].primary.social_media_logo.url

  const logos = socialMediaLocal.body[0].items

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
                    href={info.social_link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      key={index}
                      src={info.social_media_icon.url}
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
