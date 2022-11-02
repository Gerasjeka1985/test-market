<script setup lang="ts">
  const props = defineProps<{
    way:string
  }>()
</script>

<template>
  <nuxt-link class="link" :to=way><slot></slot></nuxt-link>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .link{
    position: absolute;
    top: 50px;
    right: 50px;
    width: 100px;
    min-height: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bolder;
    list-style-type: none;
    background-color: $color-primary-orange;
    color: $color-primary-gray;
    border-radius: 10px;
    transition: 0.3s;
    margin-top: 20px;

    &:hover{
      width: 120px;
      padding: 30px;
      background-color: $color-primary-black;
    }
  }
</style>