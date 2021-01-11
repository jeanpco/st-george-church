import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiFormControl: {
      root: {
        paddingRight: '30px',
      },
    },
    MuiSelect: {
      root: {
        width: '100%',
        border: '1px solid',
        padding: '10px',
        [theme.breakpoints.up('600')]: {
          padding: '15px',
        },
      },
      select: {
        '&:focus': {
          backgroundColor: 'white',
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: '0 !important',
      },
    },

    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `none`,
          content: 'none',
        },
        '&:after': {
          borderBottom: `none`,
        },
      },
    },

    MuiInputBase: {
      root: {},
      input: {
        color: localTheme.colors.primary,
        fontFamily: localTheme.fontFamily.tertiary,
        opacity: 1,
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        marginBottom: 18,
        fontSize: 14,
      },
      input: {
        color: localTheme.colors.primary,
        fontFamily: localTheme.fontFamily.tertiary,
        opacity: 1,
        padding: '18px',
        [theme.breakpoints.down('600')]: {
          maxHeight: '45px',
        },
      },
      notchedOutline: {
        borderColor: localTheme.colors.primary,
      },
    },
  },
}

export const ContactFormStyled = styled.form`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
  }

  .MuiSvgIcon-root-42.MuiSelect-icon-11 {
    position: absolute;
    right: 17px;
    display: inline-block;
    pointer-events: none;
    transform: translate(0%, 7%);
  }
  .MuiSelect-iconOpen {
    transform: rotate(180deg);
  }

  .Mui-focused {
    color: ${(props) => props.theme.colors.primary} !important;

    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors.secondary} !important;
    }
  }

  .Mui-checked {
    color: ${(props) => props.theme.colors.secondary} !important;
  }

  #body {
    height: 60px !important;
  }

  #name-option {
    padding-left: 14px;
  }

  .Success-Message {
    color: ${localTheme.colors.secondary};
  }
  .Error-Message {
    color: ${localTheme.colors.secondary};
    max-width: 300px;
  }
`

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const MessageContainer = styled.div`
  padding-top: 6px;
`

export const MessageContainerMain = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-right: 20px;
  flex-direction: row-reverse;

  .Form__SubmitButton {
    border: 2px solid red;
  }

  .Error-Message {
    color: ${localTheme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.tertiary};
  }
  .Success-Message {
    color: green;
    font-family: ${(props) => props.theme.fonts.tertiary};

    @media (max-width: ${localTheme.breakpoints.md}) {
      width: 100%;
    }
  }
`

export const FormSelectLabel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 30px;
  padding-bottom: 15px;

  p {
    padding-right: 13px;
  }
`

export const SuccessContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 150px;
  }
`
export const SuccesContent = styled.div`
  margin: 0 auto;
  width: 250px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 350px;
  }
`

export const SuccessTitle = styled.div`
  font-family: ${(props) => props.theme.fontFamily.tertiary};
  font-size: ${(props) => props.theme.fonts.heading6};
  line-height: 1.4;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.heading6};
  }
`
export const SuccessText = styled.div`
  margin-top: 25px;
`
