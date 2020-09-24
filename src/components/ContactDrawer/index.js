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
  const formInformation = query.formContent

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
            <div>
              <Title as="h2" type="menuHeading" className="Drawer__Menu-Title">
                Contact
              </Title>
            </div>
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
                contactCurrent: query.contactCurrent,
                name_label: '*Name',
                name_placeholder: '*Name',
                email_input_label: '*Email',
                email_input_placeholder: '*Email',
                textarea_input_label: '*Text',
                textarea_input_placeholder: '*Text',
                button_text: 'Send',
                formInformation: formInformation,
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
