const state = {
  products: [],
  cart: {
    items: [],
    open: false
  }
}

export default () => ({ ...state })