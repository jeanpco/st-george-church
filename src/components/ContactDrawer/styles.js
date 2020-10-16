import styled from '@emotion/styled'
import { theme as localTheme } from '~/utils/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export const ContactDrawerContainer = styled.div`
  height: 100%;
`

export const ContactDrawerContent = styled.div`
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 30px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-left: 50px;
    padding-right: 70px;
    padding-top: 62px;
  }
`

export const ContactIconContainer = styled.div`
  /* used for the onClickFunction */
`

export const ContactDrawerSocialMedia = styled.div`
  h3 {
    width: fit-content;
    position: relative;
  }

  h3::after {
    content: '';
    position: absolute;
    top: 21px;
    height: 2px;
    width: 100%;
    left: 0;
    background-color: black;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      top: 27px;
    }
  }
  .Contact-Social-Media-Container {
    margin-bottom: 0;
    flex-direction: column;
    align-items: normal;
    width: 100%;
    padding-top: 10px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      padding-top: 33px;
    }

    .SocialMedia__Logo {
      width: 180px;
      @media (min-width: ${localTheme.breakpoints.md}) {
        width: 219px;
        padding-top: 0 !important;
      }
    }

    .Social__Icon-Container {
      justify-content: flex-start;
      margin-bottom: 20px;

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        margin-bottom: 50px;
      }
    }

    .SocialMedia__Icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        margin-left: 0;
      }
    }
  }

  .Social__Logo-Container {
    margin-left: 0;
    margin-right: 16px;

    @media (min-width: ${localTheme.breakpoints.md}) {
      margin-right: 0;

      img {
        width: 250px !important;
      }
    }
  }
`

export const ContactDrawerHeaderContent = styled.div`
  .Drawer__Menu-Title {
    margin-bottom: 14px;
  }
`
export const ContactDrawerHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    width: fit-content;
    position: relative;
  }

  h2::after {
    content: '';
    position: absolute;
    top: 22px;
    height: 2px;
    width: 100%;
    left: 0;
    background-color: ${(props) => props.theme.colors.secondary};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      top: 40px;
      height: 4px;
    }
  }

  @media (min-width: ${localTheme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

export const IconArrowContainer = styled.div`
  display: none;

  @media (min-width: ${localTheme.breakpoints.md}) {
    padding-left: 15px;
    position: relative;
    bottom: 6px;
    display: inline;
  }
`

export const ContactFlyoutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-right: 20px;
    margin-bottom: 28px;
  }
`

export const ContactAddress = styled.div`
  margin-top: 15px;
  padding-right: 20px;
  max-width: 196px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 250px;
  }
`

export const ContactNumber = styled.div`
  margin-top: 15px;
  margin-right: 30px;
  white-space: break-spaces;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 145px;
    margin-right: 0;
  }
`

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        width: '100%',
        [theme.breakpoints.up('600')]: {
          borderLeft: '10px solid #CC1D27',
          maxWidth: '632px',
          width: '43.6%',
        },
      },
    },
    MuiDrawer: {
      paper: {
        boxShadow: 'none',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
      },
    },
  },
}
