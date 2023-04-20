import { ECART, REMOVE_FROM_CART } from './constant'

export const EcartReducer = (state = [], action) => {
  switch (action.type) {
    case ECART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return action.payload

    default:
      return state
  }
}
