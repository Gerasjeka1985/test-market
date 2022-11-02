<script setup lang="ts">
  import {CustomCardsTypes} from "~/types/CustomCardsTypes";

  const props = defineProps<{
    data: CustomCardsTypes[]
  }>()

</script>

<template>
  <div class="card"
       v-for="item in data"
       :key="item.id">
    <div class="card__image">
      <img :src="`http://localhost:9100/static/${item.img}`" alt="image" />
    </div>
    <div class="card__title">
      <h3>{{ item.name }}</h3>
    </div>
    <div class="card__price">
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .card{
    cursor: pointer;
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