import { 
  SET_PRODUCTS, 
  ADD_PRODUCT_TO_CART, 
  CHANGE_OPEN_CART, 
  CLEAR_CART 
} from './types'

export default {
  [SET_PRODUCTS] ( state, payload ) {
    state.products = payload.products
  },
  [ADD_PRODUCT_TO_CART] ( state, payload ) {
    const { product } = payload
    const indexFound = state.cart.items.findIndex(item => item.id === product.id)
    if(indexFound > -1) {
      state.cart.items[indexFound].quantity++
    }
    else {
      state.cart.items.push({
        quantity: 1,
        ...product
      })
    }
  },
  [CHANGE_OPEN_CART] ( state, payload ) {
    state.cart.open = payload.open
  },
  [CLEAR_CART] ( state ) {
    state.cart.items = []
  }
}