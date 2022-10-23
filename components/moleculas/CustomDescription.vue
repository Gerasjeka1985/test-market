<script setup lang="ts">
  import CustomText from "~/components/atoms/CustomText.vue";

  const text = "Мы находимся в Москве. Вы можете самостоятельно забрать покупку из точки самовывоза или заказать доставку курьером по Москве и Московской области. Также доступна доставка почтой по всей России.";
  const textH2 = "Информация о доставке";
</script>

<template>
  <div class="description">
    <h4>
      {{textH2}}
    </h4>
    <custom-text class="description__text">
      {{text}}
    </custom-text>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .description{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $color-primary-gray;

    & h4 {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text {
      width: 90%;
      font-size: 28px;
      text-align: center;
    }
  }

  @include breakpoint(large) {
    .description{

      &__text {width: 45%;}
    }
  }
</style>