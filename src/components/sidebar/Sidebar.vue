<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onBeforeMount, ref } from 'vue';
import { variables } from '../../store/store';
export default {
    name: 'Sidebar',
    setup() {
        const route = useRoute();
        const store = useStore()
        const currentTag = ref([])
        const productsArr = ref([])
        const productsState = computed(() => store.state.products)
        const catalogArr = computed(() => store.state.filter)

        productsArr.value = productsState.products
        onBeforeMount( async() =>{
        if(!productsArr.value) {
            while(!productsArr.value){

            try {
                productsArr.value = await store.dispatch('products/getProducts', { city_id: variables.city_id })
            } catch (error) {
                console.log(error)
            }}
        }    

        const tags = productsArr.value
        const current = tags.filter(item => item.slug === route.params.slug )
        currentTag.value = current[0]
        variables.category_title = await currentTag.value.name
    })  
        async function filterCatalog(tag) {
            return await store.dispatch('catalog/getCatalog', {city_id: variables.city_id, slug: tag})
        }

        return {
            currentTag,
            catalogArr,
            filterCatalog,
            productsArr
        }
    }
}
</script>

<template>
    <nav class="sidebar" >
        <ul class="sidebar__list">
            <li class="sidebar__list__el"
                @click="filterCatalog($route.params.slug)"
                >Все Продукты</li>
            <li 
                class="sidebar__list__el " 
                v-if="productsArr"
                v-for="tag in currentTag.children" 
                :key="tag.id"
                @click="filterCatalog(tag.slug)"
                >
                {{ tag.name }}
            </li>
        </ul>
    </nav>
</template>

<style>

.sidebar__list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar__list__el {
    border-bottom: solid 1px var(--btn-hover-color);
    padding: 10px;
}

.sidebar__list__el:hover {
    background: var(--btn-hover-color);
}
</style>
