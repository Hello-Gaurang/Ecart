import { axiosGet } from '../../Module/Axios'
import { apiProduct } from '../../Module/Config'
import { CATEGORY_LIST, CATEGORY_ERROR, All_CATEGORIES } from './constant'

export const aLLcategory = () => async (dispatch) => {
  try {
    dispatch({ type: All_CATEGORIES })
    let response = await axiosGet(apiProduct.All_CATEGORIES_LIST)
    // console.log('allcaterogies', response)
    if (response) {
      dispatch({ type: All_CATEGORIES, payload: response })
    } else dispatch({ type: All_CATEGORIES, payload: 'Network' })
  } catch (error) {
    console.log(error)
  }
}

export const category = (list) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST })
    let response = await axiosGet(apiProduct.CATEGORIES + list)
    // console.log('actioncart', response)
    if (response) {
      dispatch({ type: CATEGORY_LIST, payload: response })
    } else dispatch({ type: CATEGORY_ERROR, payload: 'Network' })
  } catch (error) {
    console.log(error)
  }
}
