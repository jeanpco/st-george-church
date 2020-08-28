import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'
// import LocaleContext from '../../context/LocaleProvider'
import { useStaticQuery, graphql } from 'gatsby'
import { HeaderContainer, HeaderBg, MenuContainer } from './styles'
import Title from '../Utilities/Title'
import MenuLogo from '../../images/Vector.svg'
import Drawer from '../Drawer'
import { Tablet } from '~/components/Utilities/Media'

const Header = ({ location }) => {
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
          }
        }
      }
    }
  `)

  const [toggleDrawer, setToggleDrawer] = useState(false)

  console.log(HeaderQuery)

  // const lang = React.useContext(LocaleContext)
  // const i18n = lang.i18n[lang.locale]
  // console.log(i18n)
  const img =
    HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.logo.local.publicURL

  const graphic =
    HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.graphic.local.publicURL

  // const frenchTitle =
  //   HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.site_title
  // const FrenchSubTitle =
  //   HeaderQuery.allCosmicjsHeaders.nodes[0].metadata.site_sub_title

  // const englishTitle =
  //   HeaderQuery.allCosmicjsHeaders.nodes[1].metadata.site_title
  // const englishSubTitle = HeaderQuery.allCosmicjsHeaders.nodes[1].site_sub_title

  return (
    <HeaderBg>
      <HeaderContainer>
        <div>
          <img src={img} alt="" className="Header__Logo" />
        </div>
        <MenuContainer>
          <Title as="h3" type="smallHeading">
            Menu
            <span>
              <img
                src={MenuLogo}
                alt=""
                onClick={() => setToggleDrawer(!toggleDrawer)}
              />
            </span>
          </Title>
          <img src={graphic} alt="" className="Header__Graphic" />
        </MenuContainer>
        <LanguageSwitcher location={location} />
        <Tablet>
          <Drawer
            menuBlocks="heheh"
            menuItems="jskdjskdj"
            toggleDrawer={toggleDrawer}
            setToggleDrawer={setToggleDrawer}
            logoUrl={MenuLogo}
          />
        </Tablet>
      </HeaderContainer>
    </HeaderBg>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
