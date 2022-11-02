<script setup lang="ts">
  import CustomForm from "~/components/moleculas/CustomForm.vue";
  import CustomLink from "~/components/atoms/CustomLink.vue";
  import {useDataStore} from "~/store";
  import {computed} from "vue";

  const store = useDataStore();
  await store.getData();
  const goodsList = computed(() => store.goodsList);
  const mainWay = 'http://localhost:3000/';
</script>

<template>
  <div class="admin">
    <div class="admin__btn-main">
      <custom-link :way="mainWay">Вернуться на главную</custom-link>
    </div>
    <h1 class="admin__title">Панель Администратора</h1>
    <custom-form />
      <div class="admin__sqlData">
        <ul>
          <li style="margin-top: 20px" v-for="item in goodsList">
            Name: {{item.name}}
            id: {{item.id}}
            price: {{item.price}}
          </li>
        </ul>
      </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .admin{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $color-primary-gray;

    &__title{
      text-align: center;
      margin-bottom: 45px;
    }

    &__sqlData{
      width: 300px;
      min-height: 100px;
      position: absolute;
      top:50px;
      left:50px;
      color:$color-primary-gray;
      background-color: $color-primary-orange;
    }
  }
</style>