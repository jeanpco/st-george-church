import React from 'react'
import PropTypes from 'prop-types'
import {
  theme,
  IconContainer,
  DrawerHeaderContent,
  DrawerHeaderContainer,
  DrawerSocialMedia,
  DrawerContainer,
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

  const contactCurrent = query.contactCurrent

  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        open={toggleDrawer}
        anchor={'right'}
      >
        <DrawerContainer>
          <DrawerHeaderContainer>
            <IconContainer onClick={() => setToggleDrawer(false)}>
              <Icon type="clear" />
            </IconContainer>
          </DrawerHeaderContainer>

          <DrawerHeaderContent>
            {query?.contactFlyoutTitle ? (
              <Title as="h2" type="menuHeading" className="Drawer__Menu-Title">
                {query.contactFlyoutTitle}
              </Title>
            ) : (
              ''
            )}

            <DrawerSocialMedia>
              <SocialMedia customClassName="Social-Media-Container">
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
            </DrawerSocialMedia>

            <ContactForm
              query={{
                formInformation: formInformation,
                contactFormInformation: contactFormInformation,
                contactCurrent: contactCurrent,
              }}
            />
          </DrawerHeaderContent>
        </DrawerContainer>
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
