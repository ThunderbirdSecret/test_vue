<script>
import Cards from '../../components/cards/Cards.vue';
export default {
  name: "MainPage",
  components: {Cards}
}

</script>

<template>
    <div class="mainpage__content">
      <h1 class="mainpage__content__title">Категории товаров</h1>

      <Cards />
    </div>
</template>

<style scoped>
.mainpage__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(271px, 1fr));
  justify-content: center;
  grid-template-rows: max-content max-content max-content;
}

.mainpage__content__title {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}

</style>
