import React from 'react'
import PropTypes from 'prop-types'
import LocalizedLink from '../../components/LocalizedLink'
import {
  theme,
  IconContainer,
  DrawerHeader,
  DrawerHeaderContent,
  DrawerButtons,
  DrawerMenuText,
  DrawerMenuTextContainer,
} from './styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { ThemeProvider } from '@material-ui/core/styles'
import Title from '../Utilities/Title'
import LanguageSwitcherContainer from '../LanguageSwitcher/LanguageSwitcher'
import About from '../About'
import Icon from '~/components/Icon'

const Drawer = ({ toggleDrawer, setToggleDrawer, title, menuLinks }) => {
  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        open={toggleDrawer}
      >
        <DrawerHeader>
          <div>


          <DrawerButtons>
            <LanguageSwitcherContainer location={location} />
          </DrawerButtons>

          <IconContainer onClick={() => setToggleDrawer(false)}>
            <Icon type="clear" />
          </IconContainer>
          </div>

          <DrawerHeaderContent>
            <Title as="h1" type="menuHeading" className="Drawer__Menu-Title">
              {title}
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
                              {menuText}
                              {index === 0 ? (
                                <span>
                                  <Icon type="arrow-forward" />
                                </span>
                              ) : (
                                ''
                              )}
                            </LocalizedLink>
                          ) : (
                            <LocalizedLink
                              to="/"
                              className="Header__Menu-button"
                            >
                              {menuText}
                              {index === 0 ? (
                                <span>
                                  <Icon type="arrow-forward" />
                                </span>
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
            <About />
          </DrawerHeaderContent>
        </DrawerHeader>
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
}

export default Drawer
