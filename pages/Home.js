import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import RetailCard from '../components/RetailCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlashSale, fetchRetail } from '../store/actions/productAction'

function Home () {
  const { flashSaleProducts, retailProduct, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFlashSale())
    dispatch(fetchRetail())
  }, [])

  return (
    <>
    {
        isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
          <div className="container">
            <h1>Flash Sale</h1>
            <div className="row">
              {
                flashSaleProducts.data.map(product => {
                  return <ProductCard key={ product.product_id } data={ product } />
                })
              }
            </div>
          </div>
        )
      }

      {
        isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
          <div className="container mt-5">
            <h1>Antam</h1>
            <div className="row">
              {
                retailProduct.data.map(product => {
                  return <RetailCard key={ product.product_id } data={ product } category='Antam' />
                })
              }
            </div>
          </div>
        )
      }

      {
        isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
          <div className="container mt-5">
            <h1>Big Gold</h1>
            <div className="row">
              {
                retailProduct.data.map(product => {
                  return <RetailCard key={ product.product_id } data={ product } category='BIG Gold' />
                })
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home
