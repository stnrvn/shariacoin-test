function ProductCard (props) {
  const data = props.data

  return (
      <>
      {
         data.category === props.category ? (
             <>
            <div className="col-lg-3 mt-3">
      <div className="card border-light shadow h-100" style={{ width: 'auto' }}>
        <div className="card-body">
          <img src={ data.product_image } className="card-img-top" alt={ data.title } style={{ width: '100%', height: '20vh', objectFit: 'contain' }} />
          <h5 className="card-title text-center">{ data.title }</h5>
          <h5 className="card-title text-center">{ data.category }</h5>

        </div>
          <p className="card-text text-center" style={{ color: 'green'}}>Rp. { data.price }</p>
      </div>
    </div>
    </>
         ) : (
            <>
            </>
         )
      }
    </>
  )
}

export default ProductCard
