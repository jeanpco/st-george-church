import styled from '@emotion/styled'
import Title from '~/components/Utilities/Title'
import {
  MinisterContactContainer,
  MinistriesContactInfo,
  MinistriesContactIcon,
} from '../../Modal/styles'

export const ArticleContactIcon = styled(MinistriesContactIcon)`
  transform: translate(-4px, -9px) !important;
`

export const ArticleContactContainer = styled(MinisterContactContainer)`
  .Ministries__Contact__Image-Circle {
    width: 61px;
    height: 62px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 61px;
      height: 61px;
    }
  }
  .Article__Contact__Position {
    font-size: 12px !important;
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.secondary} !important;
    text-transform: uppercase;
  }

  .Article__Contact__Name {
    font-size: 12px !important;
    font-family: ${(props) => props.theme.fontFamily.primary} !important;
    text-transform: capitalize;
  }

  svg {
    width: 68px !important;
    height: 80px !important;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 70px;
      height: 70px;
    }
  }

  .Ministries__ContactImageTitle {
    font-size: 12px !important;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding-left: 20px;
  }
`

export const ArticleContactInfo = styled(MinistriesContactInfo)`
  margin-left: 22px !important;
`

export const ArticleTitle = styled(Title)`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.heading1} !important;
    font-family: ${(props) => props.theme.fontFamily.primary} !important;
  }
`

export const PostContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  margin-top: -15px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: -40px;
  }
`

export const PostContentContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
  }
`

export const PostItemsContainer = styled.div`
  img {
    background-size: cover;
    background-position: center center;
    width: 100%;
  }

  .content-body {
    h1 {
      margin-top: 38px;

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 76px;
      }
    }

    h2 {
      margin-top: 30px;
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
      }
    }

    img {
      margin-top: 25px;

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 50px;
      }
    }

    p {
      margin-top: 28px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      p:nth-of-type(2) {
        position: relative;
        color: ${(props) => props.theme.colors.secondary};

        &::before {
          content: '';
          position: absolute;
          left: -50px;
          border-left: 5px solid;
          height: 100%;
          width: 10px;
        }
      }
    }
  }

  p:first-of-type {
    margin-top: 32px;
  }
`

export const PostItemBodyContent = styled.div`
  margin-top: 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 52px;
    display: flex;
    justify-content: center;
  }
`

export const PostItemFeatureImg = styled.div`
  border-bottom: 4px solid black;
  padding-bottom: 35px;
`

export const ArticleContentContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 75%;
    padding-right: 60px;
  }
`

export const ContactInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;

  .Article__Contact__Publish {
    margin-top: 10px !important;
    font-weight: bold;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 25%;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-right: 16px;
  }
`
