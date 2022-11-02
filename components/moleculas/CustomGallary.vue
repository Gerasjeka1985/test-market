<script setup lang="ts">
  import GoodCard from "~/components/atoms/GoodCard.vue";
  import {useDataStore} from "~/store/index";
  import {computed} from "vue";

  const store = useDataStore();
  await store.getData();
  const goodsList = computed(() => store.goodsList);
</script>

<template>
  <div class="gallary">
      <good-card :data="goodsList"/>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .gallary{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    min-height: 300px;
    margin: auto;
  }

  @include breakpoint(large) {
    .gallary{
      flex-flow: wrap;
      justify-content: space-around;
      flex-direction: row;
    }
  }
</style>