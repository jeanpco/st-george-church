import React from 'react'
import { MobileDown, MobileUp } from '~/components/Utilities/Media'

import {
  FooterContainer,
  LegalLinksContainer,
  GraphicContainer,
  DesignedTextContainer,
} from './styles'
import { SocialContentContainer } from '../SocialMedia/styles'
import { useStaticQuery, graphql } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'
import SocialMedia from '../../components/SocialMedia'
import Text from '../Utilities/Text'
import { Link } from 'gatsby'
import { WidthLimiterContainer } from '../Layout/styles'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footer: allPrismicFooter {
        nodes {
          lang
          data {
            copyright_text
            footer_graphic {
              url
            }
            legal_section {
              privacy
              terms_of_service
            }
          }
        }
      }
    }
  `)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const footerData = data.footer.nodes
    .filter((node) => node.lang === i18n.locale)
    .map((r) => r.data)

  const footerLocal = footerData[0]

  const footerGraphic = footerLocal?.footer_graphic?.url
    ? footerLocal.footer_graphic.url
    : ''
  const today = new Date()
  const year = today.getFullYear()

  return (
    <FooterContainer>
      <WidthLimiterContainer className="Footer__WidthLimiter">
        <GraphicContainer>
          <img
            src={footerGraphic}
            alt="footer graphic"
            className="Footer__Graphic"
          />
        </GraphicContainer>
        <SocialContentContainer>
          <SocialMedia />
        </SocialContentContainer>
        <DesignedTextContainer>
          <Text
            as="small"
            type="smallText500"
            className="Footer__AgencyCopyright"
          >
            Designed and built by {''}
            <MobileDown>
              <br />
            </MobileDown>{' '}
            <span>
              {' '}
              <a
                href="https://rap.agency/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'black' }}
              >
                RAP
              </a>
            </span>{' '}
            ×{' '}
            <span>
              {' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://field-office.ca/"
                style={{ color: 'black' }}
              >
                Field Office
              </a>
            </span>
          </Text>
        </DesignedTextContainer>
        <LegalLinksContainer>
          <MobileDown>
            {footerLocal?.legal_section?.length > 0
              ? footerLocal.legal_section.map((section, index) => {
                  return (
                    <Link key={`LegalSectionsLink -  ${index}`} to="/faq">
                      <Text type="link" className="Footer__LegalLinks">
                        {section?.privacy ? section.privacy : ''}
                      </Text>
                      <Text type="link" className="Footer__LegalLinks">
                        {section?.terms_of_service
                          ? section.terms_of_service
                          : ''}
                      </Text>
                    </Link>
                  )
                })
              : ''}
            {footerLocal?.copyright_text ? (
              <Text
                type="smallText400"
                as="small"
                className="Footer__CopyrightText"
              >{`© ${year} ${footerData[0].copyright_text}`}</Text>
            ) : (
              ''
            )}
          </MobileDown>
          <MobileUp>
            {footerLocal?.copyright_text ? (
              <Text
                type="smallText400"
                as="small"
                className="Footer__CopyrightText"
              >{`© ${year} ${footerData[0].copyright_text}`}</Text>
            ) : (
              ''
            )}
            {footerLocal?.legal_section?.length > 0
              ? footerLocal.legal_section.map((section, index) => {
                  return (
                    <Link key={`LegalSectionsLink -  ${index}`} to="/faq">
                      <Text type="link" className="Footer__LegalLinks">
                        {section?.privacy ? section.privacy : ''}
                      </Text>
                      <Text type="link" className="Footer__LegalLinks">
                        {section?.terms_of_service
                          ? section.terms_of_service
                          : ''}
                      </Text>
                    </Link>
                  )
                })
              : ''}
          </MobileUp>
        </LegalLinksContainer>
      </WidthLimiterContainer>
    </FooterContainer>
  )
}

export default Footer
