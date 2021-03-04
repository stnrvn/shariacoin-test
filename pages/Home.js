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
    </>
  )
}

export default Home
