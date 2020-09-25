import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  theme,
  ContactFormStyled,
  MessageContainerMain,
  MessageContainer,
  FormSelectLabel,
  SuccessTitle,
  SuccessContainer,
  SuccesContent,
  SuccessText,
} from './styles'
import TextField from '@material-ui/core/TextField'
import { ThemeProvider } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { validateInput, validateAll } from '../../utils/functions/validateForm'
import { encode } from '../../utils/functions/encode'
import axios from 'axios'
import Button from '../Utilities/Button'
import Text from '../Utilities/Text'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
const ContactForm = ({
  query: {
    name_label,
    name_placeholder,
    email_input_label,
    // email_input_placeholder,
    textarea_input_label,
    // button_text,
    formInformation,
    contactCurrent,
  },
}) => {
  const [formSuccess, setFormSuccess] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    text: '',
    done: false,
  })
  const [personName, setPersonName] = useState([])
  const [open, setOpen] = useState(false)
  const [formStatus, setFormStatus] = useState({
    message: '',
    state: '',
  })

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (formSuccess) {
      setTimeout(() => {
        setFormSuccess(false)
        setFormStatus({
          message: '',
          state: '',
        })
        setFormState({
          name: '',
          email: '',
          text: '',
        })
      }, 500)
    }
  }, [formSuccess])

  const formOnBlur = (e) => {
    const validation = validateInput(e.target, formState)
    if (!validation.state) {
      setFormStatus({
        message: validation.message,
        state: validation.state,
        error: !validation.state ? e.target.name : '',
      })
    } else {
      setFormStatus({
        message: '',
        state: validation.state,
        error: !validation.state ? e.target.name : '',
      })
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const validationOnSubmit = validateAll(e.target, formState)

    if (!validationOnSubmit.state) {
      return setFormStatus({
        message: validationOnSubmit.message,
        state: validationOnSubmit.state,
      })
    }

    const body = encode({ 'form-name': 'contact', ...formState })

    try {
      const form = await axios.post('/', body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      if (form.status === 200) {
        // eslint-disable-next-line no-console
        setFormSuccess(true)
        setFormStatus({
          message: validationOnSubmit.message,
          state: validationOnSubmit.state,
        })

        setFormState({ ...formState, done: formState.done === true })
      }
    } catch (err) {
      if (err) {
        console.log(err)
      }
    }
  }

  const handleChange = (event) => {
    setPersonName(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const names = []

  formInformation.map((contact) => {
    names.push(contact.contact_name.text)
  })

  console.log(contactCurrent)

  console.log(names)

  console.log(names.includes(contactCurrent))

  return (
    <ThemeProvider theme={theme}>
      {formState.done === false ? (
        <ContactFormStyled
          name="contact"
          data-netlify-honeypot="bot-field"
          method="POST"
          data-netlify="true"
          noValidate
          onBlur={formOnBlur}
          onSubmit={submitHandler}
          fullWidth
          label=""
        >
          <FormSelectLabel>
            <Text type="smallText700">To:</Text>

            <Select
              labelId="option-select-label"
              id="name-option"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={personName}
              onChange={handleChange}
              fullWidth
              displayEmpty
              IconComponent={ArrowDownwardIcon}
            >
              <MenuItem value="">{contactCurrent}</MenuItem>
              {names.map((name, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormSelectLabel>

          <TextField
            id="register-firstname"
            label={name_label ? name_label : 'Name'}
            placeholder={name_placeholder ? name_placeholder : '*Name'}
            onChange={changeHandler}
            fullWidth
            variant="outlined"
            name="name"
            error={formStatus.error === 'name'}
            focused={false}
            value={formState.name}
          />
          <TextField
            id="forgot-password-email"
            name="email"
            label={email_input_label ? email_input_label : '*Email'}
            onChange={changeHandler}
            placeholder={'Enter your email'}
            fullWidth
            variant="outlined"
            error={formStatus.error === 'email'}
            focused={false}
          />
          <TextField
            id="body"
            type="textarea"
            name="text"
            label={textarea_input_label ? textarea_input_label : '*Text'}
            onChange={changeHandler}
            placeholder={'Enter your message'}
            fullWidth
            variant="outlined"
            multiline={true}
            error={formStatus.error === 'text'}
            focused={false}
          />
          <MessageContainerMain>
            <Button
              type="submit"
              customClassName="Form__SubmitButton"
              style={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
            >
              Send
            </Button>

            <MessageContainer
              className={formStatus.state ? 'Success-Message' : 'Error-Message'}
            >
              {formStatus.message}
            </MessageContainer>
          </MessageContainerMain>
        </ContactFormStyled>
      ) : (
        <SuccessContainer>
          <SuccesContent>
            <SuccessTitle type="successTitle" as="h3">
              Thank you!
            </SuccessTitle>
            <SuccessTitle type="successTitle" as="h3">
              We will be in touch as soon as we can.
            </SuccessTitle>

            <SuccessText>
              <Text type="smallText700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                odio exercitationem. Temporibus aspernatur illum ad illo.
                Necessitatibus saepe, in quos consequuntur laborum modi cumque.
              </Text>
            </SuccessText>
          </SuccesContent>
        </SuccessContainer>
      )}
    </ThemeProvider>
  )
}

ContactForm.propTypes = {
  query: PropTypes.object,
  submitHandler: PropTypes.func,
  formState: PropTypes.any,
  setFormState: PropTypes.func,
}

export default ContactForm
