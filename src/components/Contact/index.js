import React, { useState } from 'react'
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
} from './styles'

const Contact = ({ query }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

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
                    <div
                      key={index}
                      onClick={() => setToggleDrawer(!toggleDrawer)}
                    >
                      <GalleryIconContainer>
                        <Icon type="border" />
                      </GalleryIconContainer>
                      <ContactBodyContainer>
                        <Img fluid={contactImages} />
                        <ContactItemContainer>
                          <Title type="heading7">{info.contact_position}</Title>
                          <Text type="smallText800">
                            {info.contact_name.text}
                          </Text>
                        </ContactItemContainer>
                      </ContactBodyContainer>
                    </div>
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
          title: query.contactFlyoutTitle,
          address: query.contactFlyoutAddress,
          number: query.contactFlyoutNumber,
          formTitle: query.contactFormTitle,
        }}
      />
    </WidthLimiterContainer>
  )
}

Contact.propTypes = {
  query: PropTypes.object.isRequired,
}
export default Contact
