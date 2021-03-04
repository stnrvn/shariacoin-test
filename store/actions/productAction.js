import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1ZjViNzgyMDUxMzM3Zjg3Mjk3ODdiODBiMTk3NTA4NDliZjk3NjZjNzZmMDU3ODgzOTU3YjU0NTIzMTBhZjMxYjdlYjg2ZmJmNDNmY2ExIn0.eyJhdWQiOiIyMSIsImp0aSI6IjM1ZjViNzgyMDUxMzM3Zjg3Mjk3ODdiODBiMTk3NTA4NDliZjk3NjZjNzZmMDU3ODgzOTU3YjU0NTIzMTBhZjMxYjdlYjg2ZmJmNDNmY2ExIiwiaWF0IjoxNjE0ODQwODQ2LCJuYmYiOjE2MTQ4NDA4NDYsImV4cCI6MTYxNDg0MjA0Niwic3ViIjoiMzQ1NDAiLCJzY29wZXMiOltdfQ.O6Zl7DpwG-TUi-TuXzxyAcaDwiU4G4ZW6ovwcvLHVheT-Shucg_0mvhfSjk3BFXfKYe4pG1wOtsqFmS4plJP03znWmCwerCUFJwyFLOcucD4Bo-F0O-FZrp4HOiXa_LPxwwtC3AqrJqBHFJkRvnV1ikPFwmdXc0H2ePciXXIRQs66pwbLjfMRLudUik4IzeM5wOBGUGEIt0gU3f5vPjYO6_8xvaS5Rf4V-V58sHuGC0-kAd_b7JjW-iWWXyVM_nj-um4izmgtXaYGrvIUhT1xpFtutWaNC9Ai1f09LYKIn1PxyuocUjaMlKxNv-oE1sEuoZuj2x3k5RIMnKkv1BZjdi2rf1wIz9WV4AChdMfsN9SJ06VHkyi4ay7JW6Z4ckIsl1jfiGaNIZ_JEPgz-VPp4QFv2JKHhVcUOFwbBRgy-GfwkB9tVtsqLeH-HnxVQS8TkNzbnjDPbUWQXYN_hBTPbv-WpLQogTkK9Tzc1FnmslCFjc6-tsy-UQyI56aYFG7pSmnyNcldIeo1wp_sG5IX5o1glckooQPHwG9nPDNZyhy2XZaYULK6Qd4G6nwViLNt7HChhfJxfgZzQzM3WM72sBjxxrwCo9PIWw6NapUqX-f9X5DWTkoKnBOow5M-W41X4uyaEBeRPqEqkfo6pR0BuCc8UKjWKwO9o_CH9ODF40.eyJhdWQiOiIyMSIsImp0aSI6IjM0Mjg3MmQ4ODg3OWQ0YWI5NGI0Nzg4MmQwY2U3NGY2NjEwMDNmY2I3NGIxY2JiN2I2Njg3MDk2ZTI4OTc5MWRkMzFmNGQ0YmRlMmJhYThlIiwiaWF0IjoxNjE0ODM4ODQwLCJuYmYiOjE2MTQ4Mzg4NDAsImV4cCI6MTYxNDg0MDA0MCwic3ViIjoiMzQ1NDAiLCJzY29wZXMiOltdfQ.Xxgo-n8FvajGPfvRobVxEsLcU5kDo-q9xdo5vy9as29ZuRlJFqoI2kUW7uxGryw1wrvASZ0hOq4EXu_tBF08wBxtAyLAjO1e8ofbNXQgWm7P5_7y659dCdZJvXCvgYFSH0HAwI7TyKmmDFpUopd-GwMrzBv6dNqZ_1DGdWmn31yBwS_3vhZUp7SULG2j-ozGwBbKd7a_7Y09RaFBDdBZFnLNjztUIpkQ7WNHE3PXjdOpytF8BAAfIk5lAcVm61JRFdQLAov8R5J0MUcRS7RXBWq45z7RG_4FMFxlqzesbpn8AwHsIWKVGocWJbkncSSVMJnqxLcYtVuwrB572wwSlf7X-w6L36Xibn9JndA5z7SxrULwKlUQ8STx5Cs-rWFkVWqf6IEamcowVqvAMG-1Ikiqm_bs0KpG2_lqHrDPZpk2uI_0DmU_iCukronPdxjQ90J7A8XVZP6ipcM9g7P6DO7bJLv97sJ4j3yWQ4bLv24Quy0CBOu-ZFsiMOtHjX-LfTcQX5Q5M2p-lXpFyxwAzIH6UAwNtuI3ZHcDWldfHRxdWhjEPy5LG5VeAUrEf6xvTTb59mMfNkXQ1liD5Stkihdq-mUMIHf1uOxh6eFSzB25wfVQrJ7i24MooFGs4lL_OMwy-XEZE0PK2amyDzW4M7VIe5fd2xR-RjTifdhutzc'

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
