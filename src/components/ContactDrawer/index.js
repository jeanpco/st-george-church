import React from 'react'
import PropTypes from 'prop-types'
import {
  theme,
  ContactDrawerContent,
  ContactIconContainer,
  ContactDrawerHeaderContent,
  ContactDrawerHeaderContainer,
  ContactDrawerSocialMedia,
  ContactDrawerContainer,
  ContactFlyoutContent,
  ContactAddress,
  ContactNumber,
} from './styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { ThemeProvider } from '@material-ui/core/styles'
import Icon from '~/components/Icon'
import SocialMedia from '../SocialMedia'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import ContactForm from '../Forms/ContactForm'

const ContactDrawer = ({ toggleDrawer, setToggleDrawer, query }) => {
  const formInformation = query?.formInformation ? query.formInformation : ''
  const contactFormInformation = query?.contactFormInformation
    ? query.contactFormInformation
    : ''

  const contactCurrent = query?.contactCurrent ? query.contactCurrent : ''

  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        open={toggleDrawer}
        anchor={'right'}
        transitionDuration={{ enter: 500, exit: 500 }}
      >
        <ContactDrawerContainer>
          <ContactDrawerContent>
            <ContactDrawerHeaderContainer>
              {query?.contactFlyoutTitle ? (
                <Title
                  as="h2"
                  type="menuHeading"
                  className="Drawer__Menu-Title"
                >
                  {query.contactFlyoutTitle}
                </Title>
              ) : (
                ''
              )}
              <ContactIconContainer onClick={() => setToggleDrawer(false)}>
                <Icon type="clear" />
              </ContactIconContainer>
            </ContactDrawerHeaderContainer>

            <ContactDrawerHeaderContent>
              <ContactDrawerSocialMedia>
                <SocialMedia customClassName="Contact-Social-Media-Container">
                  <ContactFlyoutContent>
                    <ContactAddress>
                      {query?.address ? (
                        <Text type="smallText700">{query.address}</Text>
                      ) : (
                        ''
                      )}
                    </ContactAddress>
                    <ContactNumber>
                      {query?.number ? (
                        <Text type="smallText700">{query.number}</Text>
                      ) : (
                        ''
                      )}
                    </ContactNumber>
                  </ContactFlyoutContent>
                </SocialMedia>
                {query?.formTitle ? (
                  <Title as="h3" type="contactHeading">
                    {query.formTitle}
                  </Title>
                ) : (
                  ''
                )}
              </ContactDrawerSocialMedia>

              <ContactForm
                query={{
                  formInformation: formInformation,
                  contactFormInformation: contactFormInformation,
                  contactCurrent: contactCurrent,
                }}
              />
            </ContactDrawerHeaderContent>
          </ContactDrawerContent>
        </ContactDrawerContainer>
      </SwipeableDrawer>
    </ThemeProvider>
  )
}

ContactDrawer.propTypes = {
  toggleDrawer: PropTypes.bool,
  setToggleDrawer: PropTypes.func.isRequired,
  title: PropTypes.string,
  query: PropTypes.object,
}

export default ContactDrawer
