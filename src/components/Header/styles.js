import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const HeaderBg = styled.div`
  width: 100%;

  .Header__WidthContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;

    .react-reveal {
      width: 100%;
      z-index: 1;
    }
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-right: 67px;
    h3 {
      margin-right: 10px;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.xs}) {
    margin-right: 30px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  justify-content: flex-end;

  @media (min-width: ${theme.breakpoints.xs}) {
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 0px;
  }

  .Header__button {
    position: relative;
    padding-left: 10px;
    transform: scale(2);
  }

  .Header__Graphic {
    width: 20px;
    height: auto;
    margin: 0 10px;
    margin-left: 25px;

    @media (min-width: ${theme.breakpoints.md}) {
      height: 90px;
      width: 50px;
      margin-right: 0;
    }

    @media (min-width: ${theme.breakpoints.xs}) {
      margin-left: 0;
    }
  }

  .Title_Container {
    @media (min-width: ${theme.breakpoints.md}) {
      width: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .Title {
    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
      align-items: center;
    }
  }

  .Title h3 {
    @media (min-width: ${theme.breakpoints.md}) {
      margin-right: 10px;
    }
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  .Header__LanguageSwitcher-button {
    display: none;
  }

  .Header__Logo {
    z-index: 1;
    position: relative;
    width: 230px;
    height: auto;
    left: 8px;

    @media (min-width: ${theme.breakpoints.md}) {
      top: 10px;
      width: 500px;
      height: 200px;
    }

    @media (max-width: ${theme.breakpoints.xxs}) {
      width: 180px;
    }
  }
`
