import { ECART,REMOVE_FROM_CART } from './constant'

export const eCart = (Ecart) => ({ type: ECART, payload: Ecart })

export const removeCart = (cart) => {
  return {
    type: REMOVE_FROM_CART,
    payload: cart,
  }
}
