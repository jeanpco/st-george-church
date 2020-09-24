import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'
import Text from '~/components/Utilities/Text'
import Button from '../Utilities/Button'

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
      },
      notchedOutline: {
        borderColor: localTheme.colors.primary,
      },
    },
  },
})

export const ContactFormButton = styled(Button)``

export const ContactFormStyled = styled.form`
  padding: 18px;
  margin-top: 18px;
  padding-right: 30px;



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
    height: 100px !important;
  }

  #name-option {
    padding-left: 14px;
  }

  

 

  .Success-Message {
    color: ${localTheme.colors.secondary};
  }
  .Error-Message {
    color: ${localTheme.colors.secondary};
    font-size: ${localTheme.fonts.m_small};
    max-width: 300px;

    @media (max-width: ${localTheme.breakpoints.md}) {
      font-size: ${localTheme.fonts.s};
    }
  }

  /* .has-error,
  .Mui-error {
    border: ${localTheme.colors.secondary} !important;
  } */
`

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const FormText = styled(Text)`
  color: red;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

export const MessageContainer = styled.div``

export const MessageContainerMain = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-right: 20px;

  @media (min-width: ${localTheme.breakpoints.md}) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .Error-Message {
    color: ${localTheme.colors.secondary};
  }
  .Success-Message {
    color: green;
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
