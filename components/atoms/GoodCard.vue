<script setup lang="ts">
  const picture ="https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/resize/360x400/-/format/webp/9832132844_08b63dd445_o.jpg";

  const props = defineProps<{
    testArr: object
  }>()
</script>

<template>
  <div class="card"
       v-for="item in testArr"
       :key="testArr.id">
    <div class="card__image">
      <img :src="item.img" alt="image">
    </div>
    <div class="card__title">
      <h3>{{ item.title }}</h3>
    </div>
    <div class="card__price">
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .card{
    width: 90%;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &__image{
      width: 100%;
      height: 75%;

      & img{
        width: 100%;
        height: 100%;
      }
    }
  }

  @include breakpoint(large) {
    .card{
      width: 28%;
      justify-content: space-around;
      margin-bottom: 80px;
    }
  }
</style>