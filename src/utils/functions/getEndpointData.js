export const getEndpointData = async ({
  functionFileName,
  endpoint,
  encodedData,
  customerId,
  optionalData,
}) => {
  if (!functionFileName) {
    return console.error(
      'MISSING FUNCTION FILE NAME -- Look inside "src/lambda" folder and get the need of the file you need to call. (e.g: addresses.js)'
    )
  }

  let url = ``

  if (functionFileName === 'email') {
    if (endpoint === 'email') {
      url = `/.netlify/functions/${functionFileName}?endpoint=${endpoint}`

      const response = await fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify(optionalData.email),
      })

      const data = await response.json()

      return data
    }
  }
}
