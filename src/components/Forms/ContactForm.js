import React from 'react'
import PropTypes from 'prop-types'
import { theme, ContactFormButton, Form } from './styles'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { FormHelperText } from '@material-ui/core'
import { useState } from 'react'

const ContactForm = ({
  query: {
    name_label,
    name_placeholder,
    email_input_label,
    // email_input_placeholder,
    textarea_input_label,
    button_text,
  },
  isLoading,
  submitHandler,
  formState,
  setFormState,
}) => {
  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })

    setErrorText(e.target.value)
  }

  const [errorText, setErrorText] = useState('')
  const [personName, setPersonName] = React.useState([])
  const [open, setOpen] = React.useState(false)

  const handleChange = (event) => {
    setPersonName(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]

  return (
    <ThemeProvider theme={theme}>
      <Form
        required
        name="contact"
        method="POST"
        onSubmit={submitHandler}
        validate
      >
        <InputLabel id="open-select-label">To:</InputLabel>
        <Select
          labelId="option-select-label"
          id="name-option"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={personName}
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          id="register-firstname"
          label={name_label ? name_label : 'First name'}
          placeholder={
            name_placeholder ? name_placeholder : 'Enter your first name'
          }
          onChange={changeHandler}
          fullWidth
          variant="outlined"
          name="firstName"
        />
        <TextField
          id="forgot-password-email"
          type="email"
          name="email"
          label={email_input_label ? email_input_label : 'Email'}
          onChange={changeHandler}
          placeholder={'Enter your email'}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          id="body"
          type="textarea"
          name="body"
          label={textarea_input_label ? textarea_input_label : 'Message'}
          onChange={changeHandler}
          placeholder={'Enter your message'}
          fullWidth
          variant="outlined"
          multiline={true}
        />
        <ContactFormButton
          type="submit"
          isLoading={isLoading}
          buttonStyle="tertiary"
          style={{ backgroundColor: 'transparent' }}
          id="button-submit"
          helperText="Incorrect entry."
        >
          {button_text ? button_text : 'Submit'}
        </ContactFormButton>
        <FormHelperText error={errorText.length === 0 ? true : false}>
          *Field Required
        </FormHelperText>
      </Form>
    </ThemeProvider>
  )
}

ContactForm.propTypes = {
  query: PropTypes.object,
  isLoading: PropTypes.bool,
  submitHandler: PropTypes.func,
  formState: PropTypes.any,
  setFormState: PropTypes.func,
}

export default ContactForm
