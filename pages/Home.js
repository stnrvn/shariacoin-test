import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlashSale } from '../store/actions/productAction'

function Home () {
  const { flashSaleProducts, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFlashSale())
  }, [])

  return (
    <>
    {
      JSON.stringify(flashSaleProducts)
    }
    </>
  )
}

export default Home
