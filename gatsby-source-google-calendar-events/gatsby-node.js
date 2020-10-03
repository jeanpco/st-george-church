const { google } = require('googleapis')
const moment = require('moment')
const fs = require('fs')

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

const getAuth = (options) => {
  if (options.envVar) return JSON.parse(options.envVar)
  if (fs.existsSync(options.pemFilePath)) {
    return require(options.pemFilePath)
  }
}

exports.sourceNodes = async ({ actions }, options = defaultOptions) => {
  // const key = getAuth(options);
  const key = {
    type: 'service_account',
    project_id: 'field-office-guessjs',
    private_key_id: '07789324a48040fb997bfe798afef6539d72e295',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNT1tMvJV+JDwq\nFSzhk9FrOPiFlUKA+Gqw0Y5IWijLOPWSBlwTRiwk3oDSiKS5G0hPuxLTJZDp++9m\nq1EIMxAhKHMaEegr4CCd2qbwDhVTFOQnypdVlZH0R8X1sRFAYlun523cR3XqR2zN\n7Y1nbOb8/sAtPE4V8NxwfINFuCMfx3T7YR60DIZOVUt/Fa1f1NHpu/Gic25rQ4+Y\nMDJrbJRH9CFbyHh/VSimqymKtASZVfnH9BqSvgsvJT9HupTOyw65wj8O4B68p8i5\na3GizqmILp00l/N1yeqKO+zP6DWCU6E0DSdswL6j5chnPGA2iujAGTpGD5fdqand\nz6cVLZm5AgMBAAECggEABdIDBq2jok1rgY499RDVo2/HHIhdoojdrhtpaHPai1+s\nbIzuxXgcORkFYhKQHZRLAZb42BC3pz57wWIdcblQMtRx+5JNje2Jwdfd8C5ssdaE\n3PuWvI0j3l7o2zJ/c0m74J/EYvXeqfsyN933v9pxQPOwOzK7YaQFUnthKv6RoQK0\n9l01ALhKlD0DnZtvkrcis07bnrZYzn8QWllwLeW4hrzripQyzGd0DokzKW9QidLA\nWTh3NFHF/YhBJzcjH6YlGDwsBl8Ft5XJYkiq0GIXnCtlzeqzNWw+IeB7g/GsdkPN\nIZqnZ70FflDwH53q2N4J9Ijrty1DPzeMto7I8UUWgQKBgQDogc6/ysHBVdaqnG9k\nOKQSZGrTU/eKNNeQovKqEL7op870akwKKx87/2hCEKij2+KGfpH7BFsA8DaLasIX\njxOnyLpACCwdUB5+u/uhfUT/numbVLZ18PPt5vdLhu+ZN+PpCkkb5BEZt+9FcoVy\nHnd42atK2p5zS113vli+Zz9b+QKBgQDiDgzcPX90lA6I0xKEVeIvihAC+vQ/UALQ\no3ISdtLz6bV1lMFyEc7FoE1WYMxDSqrgClAp5aIX1VRdeUlTFJ7Upj59gqM6ph62\ntQKf/nbv1l5UYM325NLsyX0XofrFSphngymyiYjQMsLoD/TnzvLi0Tcv5yIhq1Kl\npNsR3uYbwQKBgQCmD9By+4XXaE+iG4kTs8C7wizqMxaiB4vPKhLXlI5F7VTLDQCy\nYoo0d/8m8G8CWZI5LT1mY3379ZV/jgiCexY2yA7+nNelOAwPyIO4m5gkWoPPBXos\nUqRmTohh0UZf0KNfVpFQ8lukWtLybxEQqOH71ruZAvwYrMNdOv53P5bpQQKBgFak\naft0OsjVAqkgtYUxYcs00KRDyaAGq72KF+vJzVsdpaZWiLqO5sDKiznjSgc0tD/A\n1C7qy/D0nCxjk14bljENMwBqNOQCzdzbjhECuFV+xZLzs53A4LNPGvoW5IX/7GAo\nXrAGlQCvpBLMIuNCZ8fVxqA+p89d2gSRJkI4O9xBAoGAV5Ics7r4l9RLV4ECi6pm\n8WqoEJomr9s3SGCeFPZcxfHUtw85a5vF1KXUp86vxjUrY182MrvbWLFosmSSeOTf\nhESZ/PBZDEdQG+HhsOsAzGXy4iI6+MgfuWL25cbEcxMkYTN94sWg4preI7WoGtLz\naItInqKkQhDt1nRG7t7erR4=\n-----END PRIVATE KEY-----\n',
    client_email: 'test-962@field-office-guessjs.iam.gserviceaccount.com',
    client_id: '111914544686166527538',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/test-962%40field-office-guessjs.iam.gserviceaccount.com',
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
