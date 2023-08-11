<script setup>
import Header from './components/header/Header.vue';

</script>

<template>
    <Header/>
    <main class="main__container">
        
      <router-view />
      <!-- <MainPage /> -->
    </main>
    <!-- < /> -->
</template>

<style scoped>
.main__container{
  width: 80%;
  margin: 0 auto;
}

</style>
