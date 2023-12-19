import fetch from 'node-fetch';


// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
export const handler = async (event) => {
 
  try {
    // const data = JSON.parse(event.body);
    // const runtimeConfig = useRuntimeConfig();
    // console.log("API_Secret "+process.env.API_SECRET);
    const url="https://api.imavi.org/imavi/news/get-all"
    // const requestUrl = settings.wrapUrl('evaluations/detail/' + data.templateId)
    // axios.defaults.headers.common.Id = process.env.APP_ID
    // axios.defaults.headers.common.Secret = process.env.APP_SECRET
    // axios.defaults.headers.common.Authorization = 'Bearer ' + data.profileToken
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Id: process.env.APP_ID,
        Secret: process.env.APP_SECRET,
        partner: process.env.PARTNER,
      },
   });
  const data = await response.json() ;
  // const response = await axios.get(url)
   
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
   
    let statusCode = 500
    let body = 'An error has occured in fecting data (500)'
    if (error.response && error.response.status) {
      statusCode = error.response.status
      body = error.response.data.message
    }
    return {
      statusCode,
      body
    }
  }
}

// module.exports = { handler }
