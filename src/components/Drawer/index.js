import React from 'react'
import PropTypes from 'prop-types'
import {
  theme,
  IconContainer,
  DrawerHeader,
  DrawerHeaderContent,
  DrawerButtons,
} from './styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { ThemeProvider } from '@material-ui/core/styles'
import Title from '../Utilities/Title'
import LanguageSwitcherContainer from '../../LanguageSwitcher/LanguageSwitcher'

import Icon from '~/components/Icon'

const Drawer = ({ toggleDrawer, setToggleDrawer }) => {
  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        open={toggleDrawer}
      >
        <DrawerHeader>
          <DrawerButtons>
            <LanguageSwitcherContainer location={location} />
          </DrawerButtons>

          <IconContainer onClick={() => setToggleDrawer(false)}>
            <Icon type="clear" />
          </IconContainer>

          <DrawerHeaderContent>
            <Title as="h1" type="menuHeading">
              Menu
            </Title>
          </DrawerHeaderContent>
        </DrawerHeader>
      </SwipeableDrawer>
    </ThemeProvider>
  )
}

Drawer.propTypes = {
  toggleDrawer: PropTypes.bool,
  setToggleDrawer: PropTypes.func.isRequired,
  logoUrl: PropTypes.string,
}

export default Drawer