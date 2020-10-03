import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import LocaleContext from '../../context/LocaleProvider'
import { useStaticQuery, graphql } from 'gatsby'
import {
  HeaderContainer,
  HeaderBg,
  MenuContainer,
  TitleContainer,
  HeaderTitle,
} from './styles'
import Title from '../Utilities/Title'
import Drawer from '../Drawer'
import { Tablet, Desktop } from '~/components/Utilities/Media'
import Icon from '~/components/Icon'
import { WidthLimiterContainer } from '../Layout/styles'

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      header: allPrismicHeader {
        nodes {
          lang
          data {
            menu_links {
              document {
                ... on PrismicMenuLinks {
                  data {
                    body {
                      ... on PrismicMenuLinksBodyMenuLinks {
                        items {
                          link_test {
                            uid
                            url
                          }
                          link
                        }
                      }
                    }
                  }
                }
              }
            }
            about_content {
              document {
                ... on PrismicAbout {
                  data {
                    about_text
                    about_title {
                      text
                    }
                  }
                }
              }
            }
            header_graphic {
              url
            }
            header_logo_des {
              url
            }
            header_logo_mob {
              url
            }
            menu_text {
              text
            }
          }
        }
      }
    }
  `)

  const [toggleDrawer, setToggleDrawer] = useState(false)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const headerData = data?.header?.nodes
    ? data.header.nodes
        .filter((node) => node.lang === i18n.locale)
        .map((r) => r.data)
    : ''

  const headerLocal = headerData[0]

  const menuLinks = headerLocal?.menu_links?.document?.data?.body[0]?.items
    ? headerLocal.menu_links.document.data.body[0].items
    : ''

  const aboutContentQuery = headerLocal?.about_content?.document?.data
    ? headerLocal.about_content.document.data
    : ''

  const logo = headerLocal?.header_logo_mob?.url
    ? headerLocal.header_logo_mob.url
    : ''

  const desktopLogo = headerLocal.header_logo_des.url
    ? headerLocal.header_logo_des.url
    : ''

  const graphic = headerLocal?.header_graphic?.url
    ? headerLocal.header_graphic.url
    : ''

  const menuTitle = headerLocal?.menu_text?.text
    ? headerLocal.menu_text.text
    : ''

  return (
    <HeaderBg>
      <WidthLimiterContainer className="Header__WidthContainer">
        <HeaderContainer>
          <Tablet>
            <div>
              <img
                src={logo ? logo : ''}
                alt="header logo"
                className="Header__Logo"
              />
            </div>
          </Tablet>
          <Desktop>
            <img
              src={desktopLogo ? desktopLogo : ''}
              alt="header logo"
              className="Header__Logo"
            />
            <MenuContainer>
              <TitleContainer>
                <HeaderTitle>
                  <Title as="h3" type="heading6">
                    {menuTitle ? menuTitle : ''}
                  </Title>
                  <div
                    role="button"
                    onClick={() => setToggleDrawer(!toggleDrawer)}
                  >
                    <Icon type="bigMenu" />
                  </div>
                </HeaderTitle>
                <img
                  src={graphic ? graphic : ''}
                  alt="header graphic"
                  className="Header__Graphic"
                />
              </TitleContainer>
            </MenuContainer>

            <Drawer
              aboutData={aboutContentQuery ? aboutContentQuery : ''}
              menuLinks={menuLinks ? menuLinks : ''}
              title={menuTitle ? menuTitle : ''}
              toggleDrawer={toggleDrawer}
              setToggleDrawer={setToggleDrawer}
            />
          </Desktop>
          <LanguageSwitcher location={location} />
          <Tablet>
            <MenuContainer>
              <TitleContainer>
                <Title as="h3" type="heading6">
                  {menuTitle ? menuTitle : ''}
                </Title>
                <div
                  className="Header__button"
                  role="button"
                  onClick={() => setToggleDrawer(!toggleDrawer)}
                >
                  <Icon type="menu" />
                </div>
              </TitleContainer>
              <img
                src={graphic}
                alt="header graphic"
                className="Header__Graphic"
              />
            </MenuContainer>
            <Drawer
              aboutData={aboutContentQuery ? aboutContentQuery : ''}
              menuLinks={menuLinks ? menuLinks : ''}
              title={menuTitle ? menuTitle : ''}
              toggleDrawer={toggleDrawer}
              setToggleDrawer={setToggleDrawer}
            ></Drawer>
          </Tablet>
        </HeaderContainer>
      </WidthLimiterContainer>
    </HeaderBg>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
