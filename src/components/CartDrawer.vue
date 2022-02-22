<template>
  <div class="cart">
    <div class="cart-overlay"></div>
    <div class="cart-content">
      <div class="cart-header">
        <button class="btn">
          Close Cart
        </button>
      </div>
      <div class="cart-body">
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
        <item-cart />
      </div>
      <div class="cart-footer">
        <div class="cart-footer__total-title">
          Total
        </div>
        <div class="cart-footer__total-mount">
          $1234
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCart from '@/components/ItemCart.vue'
export default {
  components: {
    ItemCart
  }
}
</script>

<style scoped>
.cart {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transform: translateX(100%);
  transition: 1s;
}
.cart.in {
  transform: translateX(0);
}

.cart-overlay {
  width: calc(100vw - 300px);
  background-color: rgba(0,0,0,.75);
  cursor: pointer;
}

.cart-content {
  background-color: #fff;
  width: 75%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.cart-header {
  background-color: #cccccc;
  padding: .5rem .3rem;
  display: flex;
}
.cart-header .btn {
  background-color: transparent;
  border: none;
  font-size: 1rem;
}

.cart-body {
  max-height: 50vh;
  overflow-y: scroll;
  border-bottom: 1px solid #eee;
}

.cart-footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>