import * as actions from './constant'
import { apiProduct } from '../../Module/Config'
import { axiosGet } from '../../Module/Axios'

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: actions.GETPRODUCT_INITIATED })
    let response = await axiosGet(apiProduct.All_PRODUCTS)
    // console.log(response)
    if (response) {
      await dispatch({
        type: actions.GETPRODUCT_SUCCESS,
        payload: response,
      })
    } else dispatch({ type: actions.GETPRODUCT_ERROR, error: response })
  } catch (error) {
    console.log(error)
    console.log(error.message)
    dispatch({ type: actions.GETPRODUCT_ERROR, error: 'Network Error' })
  }
}
