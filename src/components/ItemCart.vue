<template>
  <div class="item-cart">
    <div class="item-cart__img">
      img
    </div>
    <div class="item-cart__info">
      <div class="item-cart__title">
        Title
      </div>
      <div class="item-cart__numbers">
        <div class="item-cart__qt">
          Quantity: 
        </div>
        <div class="item-cart__price">
          Price
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-cart {
  display: flex;
  justify-content: space-evenly;
  padding: .5rem 0;
  margin-bottom: .5rem;
}

.item-cart__img {
  width: 25%;
  border: 1px solid red;
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