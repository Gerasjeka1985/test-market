<script setup lang="ts">
  const phone = "+1 123 456 78 90";
  const mail = "shetuka@store.com";
  const descr = "По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в соцсетях.";
  const images = [
    {
      id:1,
      img:""
    },
    {
      id:2,
      img:""
    },
    {
      id:3,
      img:""
    },
  ];
</script>

<template>
  <div class="info">
      <div class="info__phone">
        <p>
          {{phone}}
        </p>
      </div>
      <div class="info__mail">
        <p>
          {{mail}}
        </p>
      </div>
      <div class="indo__descr">
        <p class="info__descr-sub">
          {{descr}}
        </p>
      </div>
      <div class="info__icons">
        <ul class="info__list">
          <li class="info__item" v-for="item in images" :key="item.id">
            <img :src="item.img" alt="icon"/>
          </li>
        </ul>
      </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 440px;

    &__phone{font-size: 28px}

    &__mail{font-size: 28px}

    &__descr{
      font-size: 18px;
      align-items: center;

      &-sub{
        width: 80%;
        margin: auto;
        text-align: center;
      }
    }

    &__list{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__item{
      list-style-type: none;
    }
  }

  @include breakpoint(large) {
    .info{
      height: 575px;
    }
  }
</style>