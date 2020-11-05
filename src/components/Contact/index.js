import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '~/components/Icon'
import ContactDrawer from '../ContactDrawer'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import BackgroundImage from 'gatsby-background-image'
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

const Contact = ({ query: { contactData, contactUid } }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)
  const [contactPerson, setContactPerson] = useState('')

  const contactFormInformation = contactData?.contact_form?.document?.data
    ? contactData.contact_form.document.data
    : ''

  const contactSectionTitle = contactData?.contact_title?.text
    ? contactData.contact_title.text
    : ''

  const contactBody = contactData?.body[0]?.items
    ? contactData.body[0].items
    : ''

  const contactFlyoutTitle = contactData?.contact_flyout_title?.text
    ? contactData.contact_flyout_title.text
    : ''

  const contactFlyoutAddress = contactData?.contact_flyout_address
    ? contactData.contact_flyout_address
    : ''

  const contactFlyoutNumber = contactData?.contact_flyout_number
    ? contactData.contact_flyout_number
    : ''

  const contactFormTitle = contactData?.contact_form_title
    ? contactData.contact_form_title
    : ''

  const onClickHandler = (e) => {
    setToggleDrawer(!toggleDrawer)

    setContactPerson(e.currentTarget.childNodes[1].childNodes[1].innerText)
  }

  return (
    <>
      <WidthLimiterContainer>
        <TeamContainer id={contactUid}>
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
                const contactImages = info.single_contact_link.document.data
                  ?.contact_img?.localFile?.childImageSharp?.fluid
                  ? info.single_contact_link.document.data.contact_img.localFile
                      .childImageSharp.fluid
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
                        {contactFlyoutTitle ? (
                          <BackgroundImage
                            fluid={contactImages}
                            className="Contact__Image-Circle"
                          >
                            <Desktop>
                              {contactFlyoutTitle ? (
                                <Title
                                  as="h4"
                                  className={'ContactImageTitle'}
                                  type="backgroundHeading"
                                >
                                  {contactFlyoutTitle}
                                </Title>
                              ) : (
                                ''
                              )}
                            </Desktop>
                          </BackgroundImage>
                        ) : (
                          ''
                        )}
                      </ContactImageContainer>
                      <ContactItemContainer>
                        {info?.single_contact_link?.document?.data
                          ?.contact_position ? (
                          <Title as="h3" type="heading7">
                            {
                              info.single_contact_link.document.data
                                .contact_position
                            }
                          </Title>
                        ) : (
                          ''
                        )}
                        {info?.single_contact_link?.document?.data?.contact_name
                          ?.text ? (
                          <Text type="smallText800" id="contact-name">
                            {
                              info.single_contact_link.document.data
                                .contact_name.text
                            }
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
    </>
  )
}

Contact.propTypes = {
  query: PropTypes.object,
}

export default Contact
