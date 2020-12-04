const { google } = require('googleapis')
const moment = require('moment')
const fs = require('fs')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const requiredFields = ['id', 'internal']
const defaultOptions = {
  includedFields: [
    'start',
    'end',
    'summary',
    'status',
    'organizer',
    'description',
    'location',
    'slug',
  ],
  calendarId: '',
  assumedUser: '',
  envVar: '',
  pemFilePath: '',
  // only events after today
  timeMin: moment().format(),
  // only events two years from now
  timeMax: moment().add(2, 'y').format(),
  scopes: [
    `https://www.googleapis.com/auth/calendar.events.readonly`,
    `https://www.googleapis.com/auth/calendar.readonly`,
  ],
}
const forbiddenChars = [',', '!', '#', '?', '.']

const getSlug = (event) => {
  const summary = event.summary
    .split(' ')
    .map((word) => {
      return word
        .toLowerCase()
        .split('')
        .filter((char) => !forbiddenChars.includes(char))
        .join('')
    })
    .join('-')

  const date = event.start.date
    ? event.start.date
    : moment(event.start.dateTime).format('MM-DD-YYYY')

  return `${date}/${summary}`
}

const processEvents = (event, fieldsToInclude) => {
  return Object.keys(event).reduce((acc, key) => {
    if (fieldsToInclude.concat(requiredFields).includes(key)) {
      return {
        ...acc,
        [key]: event[key],
      }
    }
    return acc
  }, {})
}

// const getAuth = (options) => {
//   if (options.envVar) return JSON.parse(options.envVar)
//   if (fs.existsSync(options.pemFilePath)) {
//     return require(options.pemFilePath)
//   }
// }

exports.sourceNodes = async ({ actions }, options = defaultOptions) => {
  // const key = getAuth(options)
  const key = {
    type: 'service_account',
    project_id: 'api-7264356156306496264-378900',
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/calendar%40api-7264356156306496264-378900.iam.gserviceaccount.com',
  }

  const { createNode } = actions
  const {
    assumedUser,
    calendarId,
    includedFields,
    timeMax,
    timeMin,
    scopes,
  } = { ...defaultOptions, ...options }

  // setting the general auth property for client
  const token = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    scopes,
    assumedUser
  )
  google.options({ auth: token })

  // getting the calendar client
  const calendar = google.calendar('v3')

  // getting the list of items for calendar
  const {
    data: { items },
  } = await calendar.events.list({
    calendarId: calendarId,
    showDeleted: false,
    // ascending
    orderBy: 'starttime',
    // recurring events are duplicated
    singleEvents: true,
    timeMin: timeMin,
    timeMax: timeMax,
  })

  // Process data into nodes.
  items
    .map((event) => ({
      ...event,
      slug: getSlug(event),
      internal: {
        contentDigest: event.updated,
        type: 'GoogleCalendarEvent',
      },
    }))
    .forEach((event) => createNode(processEvents(event, includedFields)))

  // We're done, return.
  return
}
