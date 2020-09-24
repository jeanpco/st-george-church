// import validator from 'validator'

// export const validateInput = (target, formState) => {
//   const messageIsEmpty = validator.isEmpty(formState.message)
//   const validFullName = !validator.isEmpty(formState.fullname)
//   const validEmail =
//     !validator.isEmpty(formState.email) && validator.isEmail(formState.email)
//   const validPhone =
//     !validator.isEmpty(formState.phone) && validator.isNumeric(formState.phone)

//   if (target.name === 'fullname') {
//     if (!validFullName) {
//       return {
//         message: 'Please provide your full name',
//         state: false,
//       }
//     } else {
//       return {
//         message: '',
//         state: true,
//       }
//     }
//   } else if (target.name === 'email') {
//     if (!validEmail) {
//       return {
//         message: 'Please provide a valid email.',
//         state: false,
//       }
//     } else {
//       return {
//         message: '',
//         state: true,
//       }
//     }
//   } else if (target.name === 'phone') {
//     if (!validPhone) {
//       return {
//         message: 'Please provide a valid phone number.',
//         state: false,
//       }
//     } else {
//       return {
//         message: '',
//         state: true,
//       }
//     }
//   } else if (target.name === 'message') {
//     // const message = document.querySelector('textarea')
//     if (messageIsEmpty) {
//       return {
//         message: 'Message field cannot be empty.',
//         state: false,
//       }
//     } else {
//       return {
//         message: '',
//         state: true,
//       }
//     }
//   } else {
//     return {
//       message: 'Thank you for sending a message.',
//       state: true,
//     }
//   }
// }

// export const validateAll = (form, formState) => {
//   const inputs = form.querySelectorAll('input, textarea')
//   const results = []
//   ;[...inputs].forEach((input) => {
//     results.push(validateInput(input, formState))
//   })
//   const validate = results.every((result) => result.state)
//   if (!validate) {
//     return {
//       message:
//         'There is an error. Please check that all fields are filled in correctly',
//       state: false,
//     }
//   } else {
//     return { message: 'Thank you for your message.', state: true }
//   }
// }
