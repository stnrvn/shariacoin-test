import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk1M2Q5MDk4ODFmM2Y1MWRjNDkxMTM3ZmIxMGQyYjRhMGEzODRmZDljNTIwYTI1NzA4OWE1NGQ3NzBjZDliOGQ1MWU1ZDQ0MTBjM2JhYzdlIn0.eyJhdWQiOiIyMSIsImp0aSI6Ijk1M2Q5MDk4ODFmM2Y1MWRjNDkxMTM3ZmIxMGQyYjRhMGEzODRmZDljNTIwYTI1NzA4OWE1NGQ3NzBjZDliOGQ1MWU1ZDQ0MTBjM2JhYzdlIiwiaWF0IjoxNjE0ODQ3NzUxLCJuYmYiOjE2MTQ4NDc3NTEsImV4cCI6MTYxNDg0ODk1MSwic3ViIjoiMzQ1NDAiLCJzY29wZXMiOltdfQ.FBAvdJmKzQHOqn2E4xHkCguCKEsJUX5BlW1CqV3JnKX-MhyjodCDmSIHgEQdPm1JaDXsRGKyZUZCnGi1Lec_O1VOR3FVLqI9YNKxTW7gY2rGZWEsOUk1abRgiOi_OInZArB5pJixmqEjE92QGxB2Dn8TvxlczvVzVBzRUu1FunKh5Exq6eBjmLv69_bjbgAJ2mv7xmCuou9BwCNGwBHDS6zuE4YNX1sUvldbmFF3VonT0jywWYuG109VfJYIORZtdOvX18oZakmDrB91Crxx-FCTzFvpjq1phHjTHt5vD94LQuzgxApYdD2xRfpYuNw-HsbDKs10IY6qjI4lZ7CFhCFPpQ5tDapmLcuj2t2CamTowyqbUOA6d_f46uZVRvbmXFariboSqo9pdFSVqL2c9a9svCNjF2L0rv3t6qqXyjENeRlk_8HxNAJdJe_2PZHON0kSxTgTLzzCyN-rv5rKycY5Eo_adyzkSYCF2IJ9K9RPk3J2Pbki9eSCa-HtsSTd5FIt4ZUFWfEXE1RrHkUxq2dUMl3eiYyA-gRyVoTLoho_sAbaXuWYY5SjXegZlfuiTMM5CFFui0yFgfl7oGKzVbzvyuGiMdQN7UKrwMqg_MxWa5ShkS3eXABwuzIZHGJ5eL0jsbrtCXmRpgJMfnSQqZI0Aq5WsI_q0LyoD9bu7jo'

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

        console.log(response, 'ini dari action reatil')

        dispatch({
          type: 'FETCH_RETAIL',
          payload: response.data
        })

      } catch (error) {
        console.log(error, 'error from action')
      }
    }
}
