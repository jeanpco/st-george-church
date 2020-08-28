import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const HeaderBg = styled.div`
  width: 100%;
`

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 4px;

  .Header__Graphic {
    width: 16px;
    height: 30px;
  }

  span {
    padding-left: 8px;
  }

  span img {
    vertical-align: 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    justify-content: none;
    justify-content: flex-end;
    margin-right: 100px;
    position: relative;
    top: 15px;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  .Header__LanguageSwitcher-button {
    display: none;
  }

  .Header__Logo {
    position: relative;
    left: 8px;
    margin-right: 10px;
    @media (min-width: ${theme.breakpoints.md}) {
    }
  }
`
