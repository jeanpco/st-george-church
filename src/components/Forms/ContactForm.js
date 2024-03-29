import React, { useEffect, useState } from 'react'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
import Button from '../Utilities/Button'
import Text from '../Utilities/Text'
import Icon from '~/components/Icon'

const ContactForm = ({
  query: { formInformation, contactCurrent, contactFormInformation },
}) => {
  const [formSuccess, setFormSuccess] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    text: '',
    done: false,
  })

  const [hasError, setHasError] = useState({
    state: false,
    message: '',
  })

  const [personName, setPersonName] = useState([])
  const [email, setEmail] = useState([])
  const [open, setOpen] = useState(false)
  const [formStatus, setFormStatus] = useState({
    message: '',
    state: '',
  })

  useEffect(() => {
    getContactEmail(contactCurrent)
  }, [])

  const names = formInformation.map(
    (contact) => contact.single_contact_link.document.data.contact_name.text
  )

  const getContactEmail = (contactTarget) => {
    formInformation.map((contact) => {
      if (
        contact.single_contact_link.document.data.contact_name.text ===
        contactTarget
      ) {
        return setEmail(contact.single_contact_link.document.data.contact_email)
      }
    })
  }

  console.log(email)

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
      }, 100)
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

  console.log(formState)

  const submitHandler = async (e) => {
    e.preventDefault()
    const validationOnSubmit = validateAll(e.target, formState)

    if (!validationOnSubmit.state) {
      return setFormStatus({
        message: validationOnSubmit.message,
        state: validationOnSubmit.state,
      })
    }

    try {
      const response = await fetch('/.netlify/functions/email', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          from: formState.email, // Use the email address or domain you verified above
          subject: `New message from Saint-George contact form ${formState.name}`,
          text: formState.text,
        }),
      })

      if (response.status !== 200) {
        setHasError({
          state: true,
          message:
            'There was an error in submitting your email. Please try again later.',
        })
      }

      console.log(response)

      if (response.status === 200) {
        // eslint-disable-next-line no-console
        setFormSuccess(true)
        setFormStatus({
          message: validationOnSubmit.message,
          state: validationOnSubmit.state,
        })

        setTimeout(() => {
          setFormState({ ...formState, done: formState.done === true })
        }, 3000)
      }
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        errors.forEach((error, index) => {
          // eslint-disable-next-line no-console
          console.error(`error.param ${index}`, error.param)
          // eslint-disable-next-line no-console
          console.error(`error.msg ${index}`, error.msg)
        })
      }
    }
  }

  const handleChange = (event) => {
    setPersonName(event.target.value)

    getContactEmail(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

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
            {contactFormInformation?.form_select_title.text ? (
              <Text type="smallText700">
                {contactFormInformation.form_select_title.text}:
              </Text>
            ) : (
              ''
            )}

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
              IconComponent={() => (
                <div className="MuiSvgIcon-root-42 MuiSelect-icon-11">
                  <Icon type="arrow-select" />
                </div>
              )}
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
            required
            id="name"
            label={
              contactFormInformation?.form_field_name
                ? contactFormInformation.form_field_name
                : 'Name'
            }
            placeholder={
              contactFormInformation.form_field_name
                ? contactFormInformation.form_field_name
                : 'Name'
            }
            onChange={changeHandler}
            fullWidth
            variant="outlined"
            name="name"
            error={formStatus.error === 'name'}
            focused={false}
            value={formState.name}
          />
          <TextField
            required
            id="forgot-password-email"
            name="email"
            label={
              contactFormInformation?.form_field_email
                ? contactFormInformation.form_field_email
                : 'Email'
            }
            onChange={changeHandler}
            placeholder={
              contactFormInformation?.form_field_email
                ? contactFormInformation.form_field_email
                : 'Email'
            }
            fullWidth
            variant="outlined"
            error={formStatus.error === 'email'}
            focused={false}
          />
          <TextField
            required
            id="body"
            type="textarea"
            name="text"
            label={
              contactFormInformation?.form_field_text
                ? contactFormInformation.form_field_text
                : 'Message'
            }
            onChange={changeHandler}
            placeholder={'Enter your message'}
            fullWidth
            variant="outlined"
            multiline={true}
            error={formStatus.error === 'text'}
            focused={false}
          />
          <MessageContainerMain>
            {contactFormInformation?.form_button_text ? (
              <Button
                type="submit"
                customClassName="Form__SubmitButton"
                style={{
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                }}
              >
                {contactFormInformation.form_button_text}
              </Button>
            ) : (
              ''
            )}

            <MessageContainer
              className={formStatus.state ? 'Success-Message' : 'Error-Message'}
            >
              <Text type="body">{formStatus.message}</Text>
              {hasError.message ? (
                <Text type="body" className="Error-Message">
                  {hasError.message}
                </Text>
              ) : (
                ''
              )}
            </MessageContainer>
          </MessageContainerMain>
        </ContactFormStyled>
      ) : (
        <SuccessContainer>
          <SuccesContent>
            {contactFormInformation?.form_success_title?.text ? (
              <SuccessTitle type="successTitle" as="h3">
                {contactFormInformation.form_success_title.text}
              </SuccessTitle>
            ) : (
              ''
            )}

            {contactFormInformation?.form_success_subtitle?.text ? (
              <SuccessTitle type="successTitle" as="h3">
                {contactFormInformation.form_success_subtitle.text}
              </SuccessTitle>
            ) : (
              ''
            )}

            <SuccessText>
              {contactFormInformation?.form_success_message ? (
                <Text type="smallText700">
                  {contactFormInformation.form_success_message}
                </Text>
              ) : (
                ''
              )}
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
