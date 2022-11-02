<script setup lang="ts">
  import {useDataStore} from "~/store";
  import {computed, ref} from "vue";

  const store = useDataStore();
  await store.getData();
  const file = ref(null);
  const name = ref('');
  const price = ref(0);
  const textToDel = ref(0);
  const testToFind = ref('');

  const answerToAdminPanel = computed(() => store.answerToAdminPanel);
</script>

<template>
  <div class="panel">
    <form class="panel__form" method="post" name="uploadForm" enctype="multipart/form-data">
      <input type="file" ref="file" name="file" accept="image/png" />
      <input type="text" placeholder="введите название" ref="name" />
      <input type="number" placeholder="введите цену" ref="price" />
      <input type=submit value=Upload @click.prevent="store.addGood(name,price,file)" />
    </form>
  </div>

  <div class="panel__delete-form">
      <h2>test delete</h2>
      <input type="text" placeholder="Введи id для удаления" ref="textToDel" />
      <button @click="store.delItem(textToDel)">Del</button>
  </div>

  <div class="panel__find-form">
      <input type="text" ref="testToFind" placeholder="Поиск по названию">
      <h1 v-if="answerToAdminPanel">
        цена - {{answerToAdminPanel.price}}
        наименование - {{answerToAdminPanel.name}}
      </h1>
      <h1 v-else>no data</h1>
      <button @click="store.getOne(testToFind)">find</button>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .panel{
    width: 50%;
    min-height: 100px;

    &__form{
      width: 100%;
      height: 150px;
      border: 1px dotted black;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }

    &__delete-form,
    &__find-form{
      margin-top: 50px;
      width: 50%;
      height: 150px;
      border: 1px dotted black;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }
  }

</style>