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
              {title ? (
                <Title
                  as="h2"
                  type="menuHeading"
                  className="Drawer__Menu-Title"
                >
                  {title}
                </Title>
              ) : (
                ''
              )}

              {menuLinks?.length > 0
                ? menuLinks.map((info, index) => {
                    // Logic in case we want to add more external links
                    const linksWithNoUid = []
                    if (info.link_test.uid === null) {
                      linksWithNoUid.push(info)
                    }
                    return (
                      <DrawerMenuText key={index}>
                        {info.link_test.uid ? (
                          <LocalizedLink
                            to={`/#${info.link_test.uid}`}
                            className="Header__Menu-button"
                            onClick={() => setToggleDrawer(false)}
                          >
                            {info.link ? info.link : ''}
                            <span className="Menu__Icon-Arrow">
                              <Icon type="arrow-forward" className="hello" />
                            </span>
                          </LocalizedLink>
                        ) : (
                          <>
                            {linksWithNoUid?.length > 0
                              ? linksWithNoUid.map((values, index) => {
                                  return (
                                    <a
                                      href={values.link_test.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="Header__Menu-button"
                                      key={`Menu-External-Links - ${index}`}
                                    >
                                      {values.link}
                                      <span className="Menu__Icon-Arrow">
                                        <Icon
                                          type="arrow-forward"
                                          className="hello"
                                        />
                                      </span>
                                    </a>
                                  )
                                })
                              : ''}
                          </>
                        )}
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
