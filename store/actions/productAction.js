import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBjNDJmY2JkNDcyYTcyMjkzNzczZjU2NjhmM2MyNjE1OGJmZWE0ODcyYWQ5YjgxMTcxZTIzNjIxMjA4MDk5N2I0NjcxOTQ2YzY0ZDA1MmQxIn0.eyJhdWQiOiIyMSIsImp0aSI6IjBjNDJmY2JkNDcyYTcyMjkzNzczZjU2NjhmM2MyNjE1OGJmZWE0ODcyYWQ5YjgxMTcxZTIzNjIxMjA4MDk5N2I0NjcxOTQ2YzY0ZDA1MmQxIiwiaWF0IjoxNjE0ODQxMTQwLCJuYmYiOjE2MTQ4NDExNDAsImV4cCI6MTYxNDg0MjM0MCwic3ViIjoiMzQ1NDAiLCJzY29wZXMiOltdfQ.ONe-hF62xRsUbVQugpahmwlzpnI0yX878b85TusClCoBI6Sn3yR0qn18tbEEL4mk8P8bDvPQZcCiJpV4SZQCmGsk9P2m3XCLBBXhox-_iv3NMVUufiVsqvVRLaIHJNVSE9omiiwbD1NK-L-2N3MyjM4fPVgFXYxb7B9lEfQXJt3r3YNXbbptR9xBX3UPQf9m_ZEZoRUPceFq8Ue2Gt5BqlRdM61vIwzj5jJBVY_HZ7xzvGfP66VpE8NcQDlRpY1z-Qu6fzqMhdZLFUVvsZngt-mtJptiMkNjsIVe6TWJquNaxKAv_V1_3pYqE19MskMeE39vdYOPBf-dAL1TH2ipCyKRJ65E6yMlRLjiUX_iUSLxG_nXXmzX3xUT1suoIejzxGrR1Aga1ZqDdEf_ooe8LYeuga9OIRf9uagLJPNg0bUo0xWDbKv_5RDZK6xXVqJiVc57EmtqKLTcBNZiNxIdigUkHAMz1O1vroLVKxHirihK5ZXzNh8plbWFpO2iZvXIxLhCE_hdv8l9hVxXHwJMDoo41qKxbO-GOyaTFXCcGbZcSXOTr99OrI9UUnCZJuN_mWqnMKxCtRwlMzdCVO7m1JNzVQsCio0oEB_BAON6l-IT4IDUk_cGEZLgdhq89jD5je6_1GnHzGlmz1H3mRIewbEQw_rjikZsYEYeSegzyKE'

export function fetchFlashSale () {
    return async (dispatch) => {
      try {
        const response = await axios({
          url: 'https://retail.shariacoin.co.id:5901/api/distributor/orderFlashSell',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(response, 'ini dari action')

        dispatch({
          type: 'FETCH_FLASH_SALE',
          payload: response.data
        })

      } catch (error) {
        console.log(error, 'error from action')
      }
    }
}

export function fetchRetail () {
    return async (dispatch) => {
      try {
        const response = await axios({
          url: 'https://retail.shariacoin.co.id:5901/api/distributor/order',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(response, 'ini dari action')

        dispatch({
          type: 'FETCH_RETAIL',
          payload: response.data
        })

      } catch (error) {
        console.log(error, 'error from action')
      }
    }
}
