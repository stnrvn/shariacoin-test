import axios from 'axios'

export function fetchFlashSale () {
    return async (dispatch) => {
      try {
        const response = await axios({
          url: 'https://retail.shariacoin.co.id:5901/api/distributor/orderFlashSell',
          method: 'GET',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmMzViNzQ0NDY5NzFkMzZlYThjNGZmZTlhYzhlYzBhODhlY2Y0MjdiY2RiNDExNTczN2M3NzNjMjFjNDI3ZTZjY2Q3ZTBiNTJlMjY0ODhjIn0.eyJhdWQiOiIyMSIsImp0aSI6IjlmMzViNzQ0NDY5NzFkMzZlYThjNGZmZTlhYzhlYzBhODhlY2Y0MjdiY2RiNDExNTczN2M3NzNjMjFjNDI3ZTZjY2Q3ZTBiNTJlMjY0ODhjIiwiaWF0IjoxNjE0ODI5NTI2LCJuYmYiOjE2MTQ4Mjk1MjYsImV4cCI6MTYxNDgzMDcyNiwic3ViIjoiMzQ1NDAiLCJzY29wZXMiOltdfQ.nFzMInBqn7oDHEM4IVH3suAh8tieYi5LD87ALKGRyfukgcF0sryMUjvKoAz70qczBYbcoPK5dXWJczr171fMUBUtRxQjK8Rt7mxpZ1kdb-5MofQxmkwTNCQ9ZqmDelQ_JUOBvGLwvetiN_rGbbVEE-1EjICHwMNuS18OhIHNW-sF86V-FRVSTChQldNnZlu2zQ2Xz9NeJJ6rnUXaU4mFfwFGfJSRm8i3TO-JlWaXpvxhfheJfUZnNGvevNwZtY8hVzPhX9NKj4zfd6lN9CDH1Ym-VP6pgKeHeJtt-CUyzIkpfbgOKJ4GSX3mpRa1Qh4DVF1LWaM-M7FMkKjQn22qX9TvNPQwDQs8IINUzKWfpDWs3FsjXrhc6kY6NMrS3-xfKAPpDFMT6WXcThL3xxNE0DXB8UZjTOHwfYIeXpkmssHM0vfed-OHVOeXGkfoKmen7iSGOj6HdZUHGSZJsjjzyR9ECFobtOPSAKqH4vbFeMKx9s94L2NxAyZqYx1ARMbnMdnI0YFE-0uxQvj4QLKse6CUt1kNnJh26rBHoWTViGvYGAJ7H9PTEG_m6zBfkXS6zkpcePjC9WiJXoj6Zdl3ov8jmyUDEb3HbxKj6fUUWaecjBqBEBpMNyEqGftSOA43uxCaUHltX0JJ3fG6Ehx0Q5qHg9h0YH9Nj8P62hfZPes`
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
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMyNDBiMDBjODMxMDdlMWYxZTExZTc5MjdjMzRhNzYzNDkwMzQ2YTNjZjBlZDU0ZTA0NDBmZTgzZWRhNDIzZGZhNjdiYWVmNzk2ZjZhYmY1In0.eyJhdWQiOiIyMSIsImp0aSI6IjMyNDBiMDBjODMxMDdlMWYxZTExZTc5MjdjMzRhNzYzNDkwMzQ2YTNjZjBlZDU0ZTA0NDBmZTgzZWRhNDIzZGZhNjdiYWVmNzk2ZjZhYmY1IiwiaWF0IjoxNjE0ODMwMTA4LCJuYmYiOjE2MTQ4MzAxMDgsImV4cCI6MTYxNDgzMTMwOCwic3ViIjoiMzQ1NDAiLCJzY29wZXMiOltdfQ.VCv1VWt7wdkS0vcjf4euBqt4Wq4c2l3ZiJR0koq5LftqpguJ4BR-64WlksNRhmKqkUC1IlT6tALo4xwvRLkuyJhPQxjQ0-eUFAD3x6SaCKJ-iq3R35VKkcZcTgR5EDUND1h4AD2dDLl9dLYbeaWaZtCv9zP-mf3OnGEyFLkqtZ9oWhKh_skEAcjFZOTQa1qjiUX9Jy4iO7glxwNvWvbCIs8P8IV-5Ok2sAC-I9AGIgY8tRDBmHxKMRoGXE37UZ-aR8b-mjOTY-KdtuEFaQymH9gqSNSLiGgL8lRLnxLAkKWeU27qzg8vSC2nPC-WOJpqOtfexk5qtkZTzuD4LZDNZW9yeAECSKzxkJjpnGQCH0UiCMNrEhJhi2ih2cPgB-ZQUY56Sx5rMfvANOtX3V_YcgyRZ7rF0bBAhtwRi0R8uCruVGku-mcWcEpe11aTQHNDd-zPqbjx_PydepANEKkToFOefv3u2WM6wMg6tzoN7nqlyfIhr9cRS-PLSHXWtuMMI40soRbCy9wbxLtC79qV7Sqr4vWhrXAONYC1PZTH9EMxzsJtxO9ac6tdzwhYQnpCxwrHhaxHV5WfndFJA2wBxw70npMpVMpqMNRUWywEHXL7nMAfZL2NkOn8r3Rl6W_yWUrd3feigqh9kIpkbNvtq2d8kXtMy1OsdBuuaR92dh8'
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
