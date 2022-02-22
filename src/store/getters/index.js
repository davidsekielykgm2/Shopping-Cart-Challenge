export default {
  getProducts: (state) => {
    return [ ...state.products ]
  },
  getListCart: (state) => {
    return [ ...state.cart.items ]
  },
  getOpenCart: (state) => {
    return state.cart.open
  },
  getTotalCart: (state) => {
    let total = 0
    state.cart.items.forEach(item => {
      total += item.price.current.value * item.quantity
    })
    return parseFloat(total).toFixed(2)
  }
}