import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'
import Text from '~/components/Utilities/Text'
import Button from '../Utilities/Button'

export const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: '0 !important',
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        marginBottom: 18,
        fontSize: 14,
        letterSpacing: localTheme.letterSpacing.body,
      },
      notchedOutline: {
        borderColor: localTheme.colors.primary,
      },
    },
  },
})

export const ContactFormButton = styled(Button)``

export const Form = styled.form`
  padding: 18px;
  margin-top: 18px;

  .Mui-focused {
    color: ${(props) => props.theme.colors.black} !important;

    .MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => props.theme.colors.secondary} !important;
    }
  }

  .Mui-checked {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  #open-select-label {
    display: inline;
    padding-right: 20px;
    padding-left: 20px;
  }

  #name-option {
    border: 1px solid black;
    margin-bottom: 20px;
    width: 400px;
  }

  #body {
    height: 100px !important;
  }
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
