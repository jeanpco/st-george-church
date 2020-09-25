import validator from 'validator'

export const validateInput = (target, formState) => {
  const messageIsEmpty = validator.isEmpty(formState.text)
  const validFullName = !validator.isEmpty(formState.name)
  const validEmail =
    !validator.isEmpty(formState.email) && validator.isEmail(formState.email)

  if (target.name === 'name') {
    if (!validFullName) {
      return {
        message: '*Filed Required',
        state: false,
      }
    } else {
      return {
        message: '',
        state: true,
      }
    }
  } else if (target.name === 'email') {
    if (!validEmail) {
      return {
        message: '*Filed Required.',
        state: false,
      }
    } else {
      return {
        message: '',
        state: true,
      }
    }
  } else if (target.name === 'text') {
    // const message = document.querySelector('textarea')
    if (messageIsEmpty) {
      return {
        message: 'Message field cannot be empty.',
        state: false,
      }
    } else {
      return {
        message: '',
        state: true,
      }
    }
  } else {
    return {
      message: '',
      state: true,
    }
  }
}

export const validateAll = (form, formState) => {
  const inputs = form.querySelectorAll('input, textarea')
  const results = []
  ;[...inputs].forEach((input) => {
    results.push(validateInput(input, formState))
  })
  const validate = results.every((result) => result.state)
  if (!validate) {
    return {
      message:
        'There is an error. Please check that all fields are filled in correctly',
      state: false,
    }
  } else {
    return {
      message: 'Success !',
      state: true,
    }
  }
}
