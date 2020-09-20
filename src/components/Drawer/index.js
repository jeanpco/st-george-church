import React from 'react'
import PropTypes from 'prop-types'
import LocalizedLink from '../../components/LocalizedLink'
import {
  theme,
  IconContainer,
  DrawerHeaderContent,
  DrawerHeaderContainer,
  DrawerMenuText,
  DrawerSocialMedia,
  IconArrowContainer,
  DrawerContainer,
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
  const menuLinksArray = []

  menuLinks
    ? menuLinks.map((info) => {
        Object.values(info).map((values) => {
          menuLinksArray.push(values)
        })
      })
    : ''
  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        open={toggleDrawer}
      >
        <DrawerContainer>
          <DrawerHeaderContainer>
            <LanguageSwitcherContainer location={location} />

            <IconContainer onClick={() => setToggleDrawer(false)}>
              <Icon type="clear" />
            </IconContainer>
          </DrawerHeaderContainer>

          <DrawerHeaderContent>
            <div>
              <Title as="h2" type="menuHeading" className="Drawer__Menu-Title">
                {title ? title : ''}
              </Title>
              {menuLinksArray?.length > 0
                ? menuLinksArray.map((menuText, index) => {
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
                            <LocalizedLink
                              to="/"
                              className="Header__Menu-button"
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
                          )}
                        </Title>
                      </DrawerMenuText>
                    )
                  })
                : ''}
            </div>
            <DrawerSocialMedia>
              <About
                query={{
                  title: aboutData.about_title.text,
                  text: aboutData.about_text,
                }}
              />
              <SocialMedia customClassName="Social-Media-Container" />
            </DrawerSocialMedia>
          </DrawerHeaderContent>
        </DrawerContainer>
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
