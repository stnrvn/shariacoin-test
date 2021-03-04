const initialState = {
  isLoading: true,
  flashSaleProducts: [],
  retailProduct: [],
  error: null,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FLASH_SALE':
      return {
        ...state,
        flashSaleProducts: action.payload,
        isLoading: false
      }
      case 'FETCH_RETAIL':
      return {
        ...state,
        retailProduct: action.payload,
        isLoading: false
      }
      default:
        return state
  }
}

export default productReducer