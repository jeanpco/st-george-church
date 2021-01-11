import styled from '@emotion/styled'
import Title from '../../Utilities/Title'
import Text from '../../Utilities/Text'
import LocalizedLink from '../../LocalizedLink'

export const HomePageContainer = styled.div`
  .HomePage__WidthLimiter {
    padding-right: 0;
    padding-left: 0;
  }
`

export const DesktopIntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: -25px;
  }
`

export const SliderContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: relative;
    order: 2;
    width: 50%;
  }
`

export const HomeIntroContainer = styled.div`
  text-align: center;
  width: 100%;
  order: 2;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    order: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .Home__Intro-Graphic {
      width: 262px;
    }
  }
`
export const HomeIntroContentContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    /* max-width: 520px; */
    padding: 0 20px;
    margin-top: 35px;
    margin-left: auto;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    background: ${(props) => props.theme.colors.blue};
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const HomeIntroTitle = styled(Title)`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

export const HomeIntroLink = styled(LocalizedLink)`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: ${(props) => props.theme.fonts.smallText};
  width: fit-content;
  position: relative;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.bigText};
  }

  &::after {
    content: '';
    width: 100%;
    top: 14px;
    height: 1px;
    position: absolute;
    background: black;
    left: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      top: 27px;
      height: 2px;
    }
  }
`

export const HomeIntroText = styled(Text)`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  line-height: 1.6 !important;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-bottom: 47px;
  }
`

export const HomeIntroBodyContainer = styled.div`
  margin-top: 25px;
  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 60%;
    margin: 0 auto;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 55%;
    margin-top: 0;
  }
`
