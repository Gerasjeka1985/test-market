<script setup lang="ts">
  import GoodCard from "~/components/atoms/GoodCard.vue";

  const testArr = [
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/cover/560x560/center/center/-/format/webp/9832132844_08b63dd445_o.jpg",
      title: "title",
      price: 1200
    },
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/cover/560x560/center/center/-/format/webp/9832132844_08b63dd445_o.jpg",
      title: "title",
      price: 1200
    },
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/cover/560x560/center/center/-/format/webp/9832132844_08b63dd445_o.jpg",
      title: "title",
      price: 1200
    },
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/cover/560x560/center/center/-/format/webp/9832132844_08b63dd445_o.jpg",
      title: "title",
      price: 1200
    },
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/cover/560x560/center/center/-/format/webp/9832132844_08b63dd445_o.jpg",
      title: "title",
      price: 1200
    },
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3434-3636-4431-b038-393032656635/-/cover/560x560/center/center/-/format/webp/9832132844_08b63dd445_o.jpg",
      title: "title",
      price: 1200
    }
  ]
</script>

<template>
  <div class="gallary">
      <good-card :testArr="testArr"/>
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