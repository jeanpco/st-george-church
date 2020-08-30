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
import MenuLogo from '../../images/Vector.svg'
import Drawer from '../Drawer'
import { Tablet, Desktop } from '~/components/Utilities/Media'
import Icon from '~/components/Icon'

const Header = ({ location, data }) => {
  const HeaderQuery = useStaticQuery(graphql`
    {
      allCosmicjsHeaders {
        nodes {
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
    HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.logo.local.publicURL

  const desktopLogo =
    HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.logo_desktop.local
      .publicURL
  const graphic =
    HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.graphic.local.publicURL

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
                  Menu
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
            menuBlocks="heheh"
            menuItems="jskdjskdj"
            toggleDrawer={toggleDrawer}
            setToggleDrawer={setToggleDrawer}
          />
        </Desktop>
        <LanguageSwitcher location={location} />
        <Tablet>
          <MenuContainer>
            <TitleContainer>
              <Title as="h3" type="heading6">
                Menu
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
            menuBlocks="heheh"
            menuItems="jskdjskdj"
            toggleDrawer={toggleDrawer}
            setToggleDrawer={setToggleDrawer}
            logoUrl={MenuLogo}
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
