import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store