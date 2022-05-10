interface IUserData {
  email: string;
  password?: string;
}

export async function postAuth(userData: IUserData) {
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(userData)

  //validate userData

  // // API endpoint where we send form data.
  // const endpoint = '/api/form'

  // // Form the request for sending data to the server.
  // const options = {
  //   // The method is POST because we are sending data.
  //   method: 'POST',
  //   // Tell the server we're sending JSON.
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   // Body of the request is the JSON data we created above.
  //   body: JSONdata,

  // }

  // // Send the form data to our forms API on Vercel and get a response.
  // const response = await fetch(endpoint, options)

  // // Get the response data from server as JSON.
  // // If server returns the name submitted, that means the form works.
  // const result = await response.json()
  // alert(`Is this your full name: ${result.data}`)
}