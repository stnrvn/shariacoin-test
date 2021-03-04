import axios from 'axios'

export function login (data) {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: 'https://retail.shariacoin.co.id:5901/api/login',
        method: 'POST',
        data
      })
      localStorage.setItem('token', response.data.data.token)
      console.log(response.data.data, 'test login from action')
    } catch (error) {
      console.log(data.email, 'error login from action')
    }
  }
}