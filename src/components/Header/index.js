import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'
// import LocaleContext from '../../context/LocaleProvider'
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
          title
          metadata {
            site_sub_title
            site_title
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

  const logo =
    data.header &&
    data.header.nodes[0] &&
    data.header.nodes[0].metadata &&
    data.header &&
    data.header.nodes[0] &&
    data.header.nodes[0].metadata.logo &&
    data.header.nodes[0].metadata.logo.local.publicURL
      ? data.header.nodes[0].metadata.logo.local.publicURL
      : ''

  const desktopLogo =
    data.header &&
    data.header.nodes[0] &&
    data.header.nodes[0].metadata &&
    data.header &&
    data.header.nodes[0] &&
    data.header.nodes[0].metadata.logo &&
    data.header.nodes[0].metadata.logo.local.publicURL
      ? data.header.nodes[0].metadata.logo_desktop.local.publicURL
      : ''

  const graphic =
    data.header &&
    data.header.nodes[0] &&
    data.header.nodes[0].metadata &&
    data.header &&
    data.header.nodes[0] &&
    data.header.nodes[0].metadata.logo &&
    data.header.nodes[0].metadata.logo.local.publicURL
      ? data.header.nodes[0].metadata.graphic.local.publicURL
      : ''

  const menuTitle = data.header.nodes[0].title

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
