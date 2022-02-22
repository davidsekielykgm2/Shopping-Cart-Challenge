<template>
  <div class="item-cart">
    <div class="item-cart__img">
      <img :src="imageWithHTTP" :alt="product.name" />
    </div>
    <div class="item-cart__info">
      <div class="item-cart__title">
        {{ product.name }}
      </div>
      <div class="item-cart__numbers">
        <div class="item-cart__qt">
          Quantity: {{ product.quantity }}
        </div>
        <div class="item-cart__price">
          {{ price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    imageWithHTTP() {
      return `https://${this.product.imageUrl}`
    },
    price() {
      const total = this.product.price.current.value * this.product.quantity
      const priceFloat = parseFloat(total).toFixed(2)
      return `$${priceFloat}`
    }
  }
}
</script>

<style scoped>
.item-cart {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: .5rem 0;
  margin-bottom: .5rem;
}

.item-cart__img {
  width: 25%;
}
.item-cart__info {
  width: 60%;
}

.item-cart__title {
  font-size: 1.2rem;
}

.item-cart__numbers {
  display: flex;
  justify-content: space-between;
}
</style>