import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'

import ContactDrawer from '../ContactDrawer'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Icon from '~/components/Icon'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Img from 'gatsby-background-image'
import {
  TeamContainer,
  TeamHeaderContainer,
  TeamContentContainer,
  ContactBodyContainer,
  GalleryIconContainer,
  ContactItemContainer,
  ContactContainer,
  ContactImageContainer,
} from './styles'

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      contact: allPrismicWhoWeAre {
        nodes {
          lang
          data {
            body {
              ... on PrismicWhoWeAreBodyTeamContent {
                id
                items {
                  contact_email
                  contact_image {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  contact_position
                  contact_name {
                    text
                  }
                }
              }
            }
            contact_flyout_address
            contact_flyout_number
            contact_flyout_title {
              text
            }
            contact_form_title
            contact_title {
              text
            }
            contact_form {
              document {
                ... on PrismicContactForm {
                  id
                  data {
                    form_button_text
                    form_field_email
                    form_field_name
                    form_field_text
                    form_select_title {
                      text
                    }
                    form_success_message
                    form_success_subtitle {
                      text
                    }
                    form_success_title {
                      text
                    }
                    form_title {
                      text
                    }
                  }
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

  const contactData = data?.contact?.nodes
    ? data.contact.nodes
        .filter((node) => node.lang === i18n.locale)
        .map((r) => r.data)
    : ''

  const contactLocal = contactData[0]

  const [toggleDrawer, setToggleDrawer] = useState(false)

  const [contactPerson, setContactPerson] = useState('')

  const contactFormInformation = contactLocal?.contact_form?.document?.data
    ? contactLocal.contact_form.document.data
    : ''

  const contactSectionTitle = contactLocal?.contact_title?.text
    ? contactLocal.contact_title.text
    : ''

  const contactBody = contactLocal?.body[0]?.items
    ? contactLocal.body[0].items
    : ''
  const contactFlyoutTitle = contactLocal?.contact_flyout_title?.text
    ? contactLocal.contact_flyout_title.text
    : ''

  const contactFlyoutAddress = contactLocal?.contact_flyout_address
    ? contactLocal.contact_flyout_address
    : ''

  const contactFlyoutNumber = contactLocal?.contact_flyout_number
    ? contactLocal.contact_flyout_number
    : ''

  const contactFormTitle = contactLocal?.contact_form_title
    ? contactLocal.contact_form_title
    : ''

  const onClickHandler = (e) => {
    setToggleDrawer(!toggleDrawer)
    setContactPerson(
      e.currentTarget.childNodes[0].lastElementChild.lastChild.innerText
    )
  }

  return (
    <WidthLimiterContainer>
      <TeamContainer>
        <TeamHeaderContainer>
          {contactSectionTitle ? (
            <Title as="h2" type="heading2">
              {contactSectionTitle}
            </Title>
          ) : (
            ''
          )}
          <Tablet>
            <Icon type="cross" />
          </Tablet>
          <Desktop>
            <Icon type="cross-des" />
          </Desktop>
        </TeamHeaderContainer>
        {contactBody?.length > 0 ? (
          <TeamContentContainer>
            {contactBody?.map((info, index) => {
              const contactImages = info?.contact_image?.localFile
                ?.childImageSharp?.fluid
                ? info.contact_image.localFile.childImageSharp.fluid
                : ''
              return (
                <ContactContainer key={index}>
                  <ContactBodyContainer onClick={onClickHandler}>
                    <ContactImageContainer>
                      <GalleryIconContainer>
                        <Desktop>
                          <Icon type="border" />
                        </Desktop>
                        <Tablet>
                          <Icon type="border-mob" />
                        </Tablet>
                      </GalleryIconContainer>
                      {contactImages && contactFlyoutTitle ? (
                        <>
                          <Img
                            fluid={contactImages}
                            className="Contact__Image-Circle"
                          >
                            <Desktop>
                              {contactFlyoutTitle ? (
                                <Title
                                  as="h4"
                                  className={'ContactImageTitle'}
                                  type="contactImageHeading"
                                >
                                  {contactFlyoutTitle}
                                </Title>
                              ) : (
                                ''
                              )}
                            </Desktop>
                          </Img>
                        </>
                      ) : (
                        ''
                      )}
                    </ContactImageContainer>

                    <ContactItemContainer>
                      {info?.contact_position ? (
                        <Title as="h3" type="heading7">
                          {info.contact_position}
                        </Title>
                      ) : (
                        ''
                      )}
                      {info?.contact_name?.text ? (
                        <Text type="smallText800" id="contact-name">
                          {info.contact_name.text}
                        </Text>
                      ) : (
                        ''
                      )}
                    </ContactItemContainer>
                  </ContactBodyContainer>
                </ContactContainer>
              )
            })}
          </TeamContentContainer>
        ) : (
          ''
        )}
      </TeamContainer>
      <ContactDrawer
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
        query={{
          contactCurrent: contactPerson,
          title: contactFlyoutTitle,
          address: contactFlyoutAddress,
          number: contactFlyoutNumber,
          formTitle: contactFormTitle,
          contactFormInformation: contactFormInformation,
          formInformation: contactBody,
          contactFlyoutTitle: contactFlyoutTitle,
        }}
      />
    </WidthLimiterContainer>
  )
}

export default Contact
