import React, { useState } from 'react'
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
import axios from 'axios'
import { encode } from '~/utils/functions/encode'

const ContactDrawer = ({ toggleDrawer, setToggleDrawer, query }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const body = encode({ 'form-name': 'contact', ...formState })

    try {
      const form = await axios.post('/', body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      if (form.status === 200) {
        setIsLoading(false)
      }
    } catch (err) {
      setIsLoading(false)
      const errors = err?.response?.data?.errors

      if (errors) {
        console.log('An error as occured. Please try again')

        setTimeout(() => {}, 3000)
      }
    }
  }

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
                name_label: 'name',
                name_placeholder: 'name',
                email_input_label: 'email',
                email_input_placeholder: 'email ',
                textarea_input_label: 'text',
                textarea_input_placeholder: 'hhh',
                button_text: 'Send',
              }}
              isLoading={isLoading}
              submitHandler={submitHandler}
              formState={formState}
              setFormState={setFormState}
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
