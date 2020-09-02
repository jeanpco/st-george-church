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

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      header: allCosmicjsHeaders {
        nodes {
          locale
          title
          metadata {
            site_sub_title
            site_title
            menu_links {
              link_1
              link_2
              link_3
              link_4
              link_5
            }
            graphic {
              local {
                publicURL
              }
            }
            logo {
              local {
                publicURL
              }
            }
            logo_desktop {
              local {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  const [toggleDrawer, setToggleDrawer] = useState(false)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const headerData = data.header.nodes
    .filter((node) => node.locale.toLowerCase() === i18n.locale)
    .map((r) => r.metadata)

  const headerLocal = headerData[0]

  const logo =
    headerLocal &&
    headerLocal.logo &&
    headerLocal.logo.local &&
    headerLocal.logo.local.publicURL
      ? headerLocal.logo.local.publicURL
      : ''
  const desktopLogo =
    headerLocal &&
    headerLocal.logo_desktop &&
    headerLocal.logo_desktop.local &&
    headerLocal.logo_desktop.local.publicURL
      ? headerLocal.logo_desktop.local.publicURL
      : ''

  const graphic =
    headerLocal &&
    headerLocal.graphic &&
    headerLocal.graphic.local &&
    headerLocal.graphic.local.publicURL
      ? headerLocal.graphic.local.publicURL
      : ''

  const menuTitle =
    data.header && data.header.nodes[0] && data.header.nodes[0].title
      ? data.header.nodes[0].title
      : ''

  let menuLinks = []

  headerLocal && headerLocal.menu_links
    ? headerLocal.menu_links.map((info) => {
        Object.values(info).map((values) => {
          menuLinks.push(values)
        })
      })
    : ''

  return (
    <HeaderBg>
      <HeaderContainer>
        <Tablet>
          <div>
            <img src={logo} alt="" className="Header__Logo" />
          </div>
        </Tablet>
        <Desktop>
          <img src={desktopLogo} alt="" className="Header__Logo" />
          <MenuContainer>
            <TitleContainer>
              <HeaderTitle>
                <Title as="h3" type="heading6">
                  {menuTitle}
                </Title>
                <div
                  role="button"
                  onClick={() => setToggleDrawer(!toggleDrawer)}
                >
                  <Icon type="bigMenu" />
                </div>
              </HeaderTitle>
              <img src={graphic} alt="" className="Header__Graphic" />
            </TitleContainer>
          </MenuContainer>

          <Drawer
            menuLinks={menuLinks}
            title={menuTitle}
            toggleDrawer={toggleDrawer}
            setToggleDrawer={setToggleDrawer}
          />
        </Desktop>
        <LanguageSwitcher location={location} />
        <Tablet>
          <MenuContainer>
            <TitleContainer>
              <Title as="h3" type="heading6">
                {menuTitle}
              </Title>
              <div
                className="Header__button"
                role="button"
                onClick={() => setToggleDrawer(!toggleDrawer)}
              >
                <Icon type="menu" />
              </div>
            </TitleContainer>
            <img src={graphic} alt="" className="Header__Graphic" />
          </MenuContainer>
          <Drawer
            menuLinks={menuLinks}
            title={menuTitle}
            toggleDrawer={toggleDrawer}
            setToggleDrawer={setToggleDrawer}
          ></Drawer>
        </Tablet>
      </HeaderContainer>
    </HeaderBg>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
