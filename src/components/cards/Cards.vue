<script>
/*
Ключевые поля для использования:
name - название категории
text_color - цвет текста названия категории
image - изображение для плитки категории
slug - уникальный тэг категории, для запроса данных категории и формирования адреса страниц
*/
import Card from './Card.vue'
import { useStore } from 'vuex'
import {  computed, onBeforeMount, onMounted, ref } from 'vue';
import { variables } from '../../store/store';
export default {
    components: { Card },
    name: "Cards",

    setup() {
        const store = useStore()
        const cardsArr = ref([])
        

        onMounted(async () => {
            try {
                cardsArr.value = await store.dispatch('products/getProducts', { city_id: variables.city_id })
            } catch (error) {
                console.log(error)
            }
    })
    return {
        cardsArr,
        products: computed(() => store.state.products)
    }
  }
}

</script>

<template >
    <div 
        class="cards" 
        v-for="card in products.products" 
        :key="card.id" 
        >
        <Card 
            :name="card.name" 
            :image="card.image" 
            :textColor="card.text_color"
            :slug="card.slug"
        />
    </div>
</template>

<style scoped>
.cards {
    padding: 10px;
}
</style>
