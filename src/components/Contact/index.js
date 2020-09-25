import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import ContactDrawer from '../ContactDrawer'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Icon from '~/components/Icon'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Img from 'gatsby-image'
import {
  TeamContainer,
  TeamHeaderContainer,
  TeamContentContainer,
  ContactBodyContainer,
  GalleryIconContainer,
  ContactItemContainer,
  ContactImageTitle,
} from './styles'

const Contact = ({ query }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const [contactPerson, setContactPerson] = useState('')

  const contactFormInformation = query?.content ? query.content : ''

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
          <Title type="heading2">{query.title}</Title>
          <Tablet>
            <Icon type="cross" />
          </Tablet>
          <Desktop>
            <Icon type="cross-des" />
          </Desktop>
        </TeamHeaderContainer>
        {query?.content?.length > 0 ? (
          <TeamContentContainer>
            {query?.content
              ? query.content.map((info, index) => {
                  const contactImages = info?.contact_image?.localFile
                    ?.childImageSharp?.fluid
                    ? info.contact_image.localFile.childImageSharp.fluid
                    : ''
                  return (
                    <Fragment key={index}>
                      <div onClick={onClickHandler}>
                        <ContactBodyContainer>
                          <GalleryIconContainer>
                            <Desktop>
                              <Icon type="border" />
                              <ContactImageTitle className="contact-image">
                                <h1>Contact</h1>
                              </ContactImageTitle>
                            </Desktop>
                            <Tablet>
                              <Icon type="border" />
                            </Tablet>
                          </GalleryIconContainer>
                          <Img fluid={contactImages} className="test" />
                          <ContactItemContainer>
                            <Title type="heading7">
                              {info.contact_position}
                            </Title>
                            <Text type="smallText800" id="contact-name">
                              {info.contact_name.text}
                            </Text>
                          </ContactItemContainer>
                        </ContactBodyContainer>
                      </div>
                    </Fragment>
                  )
                })
              : ''}
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
          title: query.contactFlyoutTitle,
          address: query.contactFlyoutAddress,
          number: query.contactFlyoutNumber,
          formTitle: query.contactFormTitle,
          formContent: contactFormInformation,
        }}
      />
    </WidthLimiterContainer>
  )
}

Contact.propTypes = {
  query: PropTypes.object.isRequired,
}
export default Contact
