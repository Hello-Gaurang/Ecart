import { CATEGORY_LIST, All_CATEGORIES } from './constant'

export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return { ...state, listItem: action.payload }
    case All_CATEGORIES:
      return { ...state, allItem: action.payload }
    default:
      return state
  }
}
