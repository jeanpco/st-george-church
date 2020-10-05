const sgMail = require('@sendgrid/mail')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body)

  const msg = {
    to: body.to,
    from: body.from,
    subject: body.subject,
    text: body.text,
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  sgMail.send(msg).then(
    () => {
      callback(null, {
        statusCode: 200,
        body: 'success',
      })
    },
    (error) => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)

        callback(null, {
          statusCode: 400,
          body: JSON.stringify(error.response.body),
        })
      }
    }
  )
}
