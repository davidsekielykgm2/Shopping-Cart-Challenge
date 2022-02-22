<template>
  <div class="content">
    <div class="content-btn">
      <button class="content-btn__add btn">
        Add To Cart
      </button>
      <button class="content-btn__clear btn">
        Clear Cart
      </button>
    </div>
    <cart-drawer />
  </div>
</template>

<script>
import CartDrawer from '@/components/CartDrawer.vue'
export default {
  components: {
    CartDrawer
  }
}
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-btn {
  display: flex;
  flex-direction: column;
  width: 55%;
  max-width: 300px;
}

.content-btn .btn {
  font-size: 2rem;
  padding: .5rem;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.content-btn__add {
  background-color: #009b41;
  margin-bottom: 1.5rem;
}

.content-btn__clear {
  background-color: #ba0000;
}

</style>