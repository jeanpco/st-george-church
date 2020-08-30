import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const HeaderBg = styled.div`
  width: 100%;
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    h3 {
      margin-right: 10px;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 7px;

  h3 {
    margin-right: 10px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Title h3 {
      margin-right: 10px;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 4px;

  .Header__button {
    position: relative;
    bottom: 2px;
  }

  .Header__Graphic {
    width: 16px;
    height: 30px;
    margin-right: 12px;
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

    .Header__Graphic {
      height: 90px;
      width: 50px;
    }

    .Title_Container {
      width: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .Title {
      display: flex;
      align-items: center;
    }

    .Title h3 {
      margin-right: 10px;
    }
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
      left: 86px;
      top: 10px;
    }
  }
`
