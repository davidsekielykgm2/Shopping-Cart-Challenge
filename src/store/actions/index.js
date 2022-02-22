import data from '../../json/products.json'
import { 
  SET_PRODUCTS, 
  ADD_PRODUCT_TO_CART, 
  CHANGE_OPEN_CART,
  CLEAR_CART 
} from '../mutations/types'

export default {
  fetchProducts({ commit }) {
    commit( SET_PRODUCTS, { products: data } )
  },
  addProductToCart({ commit }, product) {
    commit( ADD_PRODUCT_TO_CART, { product } )
    commit( CHANGE_OPEN_CART, { open: true })
  },
  clearCart({ commit }) {
    commit( CLEAR_CART )
    commit( CHANGE_OPEN_CART, { open: true })
  }
}