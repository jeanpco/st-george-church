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

const ContactDrawer = ({ toggleDrawer, setToggleDrawer, query }) => {
  console.log(query)
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
                    {query?.address ? <p>{query.address}</p> : ''}
                  </ContactAddress>
                  <ContactNumber>
                    {query?.number ? <p>{query.number}</p> : ''}
                  </ContactNumber>
                </ContactFlyoutContent>
              </SocialMedia>

              {query?.formTitle ? <h2>{query.formTitle}</h2> : ''}
            </DrawerSocialMedia>
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
