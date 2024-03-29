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
  width: 100%;

  .content-body {
    h1 {
      margin-top: 38px;
      font-size: ${(props) => props.theme.fonts.heading5};

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 76px;
        font-size: ${(props) => props.theme.fonts.heading3};
      }
    }

    h2 {
      margin-top: 30px;
      font-weight: normal;
      font-size: ${(props) => props.theme.fonts.heading6};
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
        font-size: ${(props) => props.theme.fonts.heading5};
      }
    }

    h3 {
      margin-top: 30px;
      font-weight: normal;
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
      }
    }

    h4 {
      margin-top: 30px;
      font-weight: normal;
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
      }
    }

    h5 {
      margin-top: 30px;
      font-weight: normal;
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
      }
    }

    h6 {
      margin-top: 30px;
      font-weight: normal;
      font-size: 12px;
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
      }
    }

    ul {
      margin-top: 30px;
      padding-left: 20px;
      font-weight: normal;
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 60px;
      }
    }

    ol {
      margin-top: 30px;
      padding-left: 20px;
      font-weight: normal;
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

    blockquote {
      position: relative;
      color: ${(props) => props.theme.colors.secondary};
      margin-left: 30px;

      &::before {
        content: '';
        position: absolute;
        left: -28px;
        border-left: 5px solid;
        height: 100%;
        width: 10px;
      }
    }
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      blockquote {
        position: relative;
        color: ${(props) => props.theme.colors.secondary};
        margin-left: 50px;

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
  position: relative;
  height: 400px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.blue};

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    height: 250px;
  }

  img {
    max-width: 100%;
    width: auto;
    height: 100%;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
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
    white-space: nowrap;
    opacity: 0.6;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 250px;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0;
    margin-right: 40px;
  }
`
