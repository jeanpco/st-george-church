import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export const theme = createMuiTheme({
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
        padding: 18,
      },
      notchedOutline: {
        borderColor: localTheme.colors.primary,
      },
    },
  },
})

export const ContactFormStyled = styled.form`
  padding: 18px;
  padding-left: 0;
  padding-right: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-right: 30px;
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
    height: 80px !important;
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

export const MessageContainer = styled.div``

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
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 30px;
  padding-bottom: 15px;

  p {
    padding-right: 30px;
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
  padding-top: 8px;
`
export const SuccessText = styled.div`
  margin-top: 25px;
`
