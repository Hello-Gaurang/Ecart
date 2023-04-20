import { combineReducers } from 'redux'
import { product } from './Product/reducer'
import { EcartReducer } from './Cart/reducer'
import { categoryReducer } from './Category/reducer'

export const rootReducer = combineReducers({
  product,
  EcartReducer,
  categoryReducer,
})
