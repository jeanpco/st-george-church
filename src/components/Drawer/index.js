import React from 'react'
import PropTypes from 'prop-types'
import LocalizedLink from '../../components/LocalizedLink'
import {
  theme,
  IconContainer,
  DrawerHeaderContent,
  DrawerContainer,
  DrawerMenuText,
  DrawerMenuTextContainer,
  DrawerSocialMedia,
  IconArrowContainer,
} from './styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { ThemeProvider } from '@material-ui/core/styles'
import Title from '../Utilities/Title'
import LanguageSwitcherContainer from '../LanguageSwitcher/LanguageSwitcher'
import About from '../About'
import Icon from '~/components/Icon'
import SocialMedia from '../SocialMedia'

const Drawer = ({
  toggleDrawer,
  setToggleDrawer,
  title,
  menuLinks,
  aboutData,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        open={toggleDrawer}
      >
        <DrawerContainer>
          <LanguageSwitcherContainer location={location} />

          <IconContainer onClick={() => setToggleDrawer(false)}>
            <Icon type="clear" />
          </IconContainer>
        </DrawerContainer>

        <DrawerHeaderContent>
          <Title as="h1" type="menuHeading" className="Drawer__Menu-Title">
            {title ? title : ''}
          </Title>
          <DrawerMenuTextContainer>
            {menuLinks?.length > 0
              ? menuLinks.map((menuText, index) => {
                  return (
                    <DrawerMenuText key={index}>
                      <Title as="h2" type="heading4">
                        {index === 0 ? (
                          <LocalizedLink
                            to="/"
                            className="Header__Menu-button current"
                          >
                            {menuText ? menuText : ''}
                            {index === 0 ? (
                              <IconArrowContainer>
                                <Icon type="arrow-forward" />
                              </IconArrowContainer>
                            ) : (
                              ''
                            )}
                          </LocalizedLink>
                        ) : (
                          <LocalizedLink to="/" className="Header__Menu-button">
                            {menuText ? menuText : ''}
                            {index === 0 ? (
                              <IconArrowContainer>
                                <Icon type="arrow-forward" />
                              </IconArrowContainer>
                            ) : (
                              ''
                            )}
                          </LocalizedLink>
                        )}
                      </Title>
                    </DrawerMenuText>
                  )
                })
              : ''}
          </DrawerMenuTextContainer>
          <About
            query={{
              title: aboutData.about_title,
              text: aboutData.about_text,
            }}
          />
          <DrawerSocialMedia>
            <SocialMedia customClassName="Social-Media-Container" />
          </DrawerSocialMedia>
        </DrawerHeaderContent>
      </SwipeableDrawer>
    </ThemeProvider>
  )
}

Drawer.propTypes = {
  toggleDrawer: PropTypes.bool,
  setToggleDrawer: PropTypes.func.isRequired,
  menuLinks: PropTypes.array,
  logoUrl: PropTypes.string,
  title: PropTypes.string,
  aboutData: PropTypes.object,
}

export default Drawer
