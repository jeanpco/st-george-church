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
              terms_of_service_link {
                url
              }
              privacy_link {
                url
              }
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

  const legalLinks =
    footerLocal?.legal_section?.length > 0
      ? footerLocal.legal_section.map((section) => {
          return (
            <>
              {section.privacy_link?.url && section.privacy ? (
                <a key={section.privacy} href={section.privacy_link?.url}>
                  <Text type="link" className="Footer__LegalLinks">
                    {section?.privacy ? section.privacy : ''}
                  </Text>
                </a>
              ) : (
                <></>
              )}
              {section.terms_of_service_link?.url &&
              section.terms_of_service ? (
                <a
                  key={section?.terms_of_service}
                  href={section.terms_of_service_link?.url}
                >
                  <Text type="link" className="Footer__LegalLinks">
                    {section?.terms_of_service ? section.terms_of_service : ''}
                  </Text>
                </a>
              ) : (
                <></>
              )}
            </>
          )
        })
      : ''

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
            {legalLinks}
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
            {legalLinks}
          </MobileUp>
        </LegalLinksContainer>
      </WidthLimiterContainer>
    </FooterContainer>
  )
}

export default Footer
