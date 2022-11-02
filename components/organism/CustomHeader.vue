<script setup lang="ts">
  import CustomText from "~/components/atoms/CustomText.vue";
  import CustomLink from "~/components/atoms/CustomLink.vue";

  const logo = "https://static.tildacdn.com/tild6431-3661-4430-b735-353863373435/11.svg";
  const text = "Мы любим создавать особенные и уникальные вещи для украшения вашей жизни и дома";
  const  admWay = 'http://localhost:3000/user/admin';
</script>

<template>
  <div class="header">
    <div class="header__adm-btn">
      <custom-link :way="admWay">Админ Панель</custom-link>
    </div>
    <div class="header__logo">
      <img :src="logo" alt="logo" />
    </div>
    <custom-text class="header__text">
      {{text}}
    </custom-text>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .header{
    width: 100%;
    height: 500px;

    &__logo{
      width: 100%;
      height: 30%;
      margin: 45px 0;

      & img{
        width: 100%;
        height: 100%;
      }
    }

    &__text{
      text-align: center;
      font-size: 28px;
      width: 80%;
      margin: auto;
    }
  }

  @include breakpoint(large) {
    .header{
      height: 355px;

      &__text {width: 45%;}
    }
  }

</style>