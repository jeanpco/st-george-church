import React from 'react'
import { MobileDown, Tablet, Desktop } from '~/components/Utilities/Media'

import {
  FooterContainer,
  SocialMediaFooterContainer,
  LegalLinksContainer,
  LogoContainer,
  LegalContainerDesktop,
} from './styles'
import { useStaticQuery, graphql } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'
import SocialMedia from '../../components/SocialMedia'
import Text from '../Utilities/Text'
import { Link } from 'gatsby'
import { WidthLimiterContainer } from '../Layout/styles'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footer: allCosmicjsFooters {
        nodes {
          locale
          metadata {
            copyright_text
            legal_sections {
              privacy
              terms_of_service
            }
            logo_footer {
              local {
                url
              }
            }
          }
        }
      }
    }
  `)

  const logo = data.footer.nodes[0].metadata.logo_footer.local.url

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const footerData = data.footer.nodes
    .filter((node) => node.locale.toLowerCase() === i18n.locale)
    .map((r) => r.metadata)

  console.log(footerData)
  const today = new Date()
  const year = today.getFullYear()

  return (
    <FooterContainer>
      <WidthLimiterContainer className="Footer__WidthLimiter">
        <LogoContainer>
          <img src={logo} alt="" className="Footer__Logo" />
          <SocialMediaFooterContainer>
            <SocialMedia />
          </SocialMediaFooterContainer>
        </LogoContainer>
        <Text
          as="small"
          type="smallText500"
          className="Footer__AgencyCopyright"
        >
          Designed and built by
          <MobileDown>
            <br />
          </MobileDown>{' '}
          <span>RAP</span> × <span>Field Office</span>
        </Text>
        <LegalContainerDesktop>
          <Tablet>
            <LegalLinksContainer>
              {footerData[0].legal_sections.length > 0
                ? footerData[0].legal_sections.map((section, index) => {
                    return (
                      <Link key={`LegalSectionsLink -  ${index}`} to="/">
                        <Text type="link" className="Footer__LegalLinks">
                          {section.privacy}
                        </Text>
                        <Text type="link" className="Footer__LegalLinks">
                          {section.terms_of_service}
                        </Text>
                      </Link>
                    )
                  })
                : ''}
              {footerData[0].copyright_text ? (
                <Text
                  type="smallText400"
                  as="small"
                  className="Footer__CopyrightText"
                >{`© ${year} ${footerData[0].copyright_text}`}</Text>
              ) : (
                ''
              )}
            </LegalLinksContainer>
          </Tablet>
          <Desktop>
            <LegalLinksContainer>
              {footerData[0].copyright_text ? (
                <Text
                  type="smallText400"
                  as="small"
                  className="Footer__CopyrightText"
                >{`© ${year} ${footerData[0].copyright_text}`}</Text>
              ) : (
                ''
              )}
              {footerData[0].legal_sections.length > 0
                ? footerData[0].legal_sections.map((section, index) => {
                    return (
                      <Link key={`LegalSectionsLink -  ${index}`} to="/">
                        <Text type="link" className="Footer__LegalLinks">
                          {section.privacy}
                        </Text>
                        <Text type="link" className="Footer__LegalLinks">
                          {section.terms_of_service}
                        </Text>
                      </Link>
                    )
                  })
                : ''}
            </LegalLinksContainer>
          </Desktop>
        </LegalContainerDesktop>
      </WidthLimiterContainer>
    </FooterContainer>
  )
}

export default Footer
