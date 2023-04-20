import * as actions from './constant'

const initialState = {
  error: false,
  loading: false,
  message: false,
  productlist: [],
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case action.GETPRODUCT_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      }
    case actions.GETPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productlist: action.payload,
      }
    case actions.GETPRODUCT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      }
    default:
      return state
  }
}
