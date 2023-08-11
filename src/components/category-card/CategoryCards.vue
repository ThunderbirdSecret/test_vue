<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { computed, onBeforeMount, ref } from 'vue';
import ProductCard from './ProductCard.vue'
import { variables } from '../../store/store';

    export default{
        name: 'CategoryCards',
        components: {ProductCard},

        setup() {
            const dataArr = ref([])
            const store = useStore()
            const route = useRoute()

            onBeforeMount(async() => {
                try {
                    const res = await store.dispatch('catalog/getCatalog', {
                        city_id: variables.city_id, 
                        slug: route.params.slug
                    })
                    return res
                } catch(e) {
                    console.log(e);
                };
            })
            
            return {
                dataArr,
                updRouter: computed(() => dataArr.value = route.params.slug),
                updStore: computed(() => store.state.catalog)
            }
        }
    }
    </script>

    <template>
        <div class="CategoryCard">
        <ProductCard 
            v-for="item in updStore.catalog.products"
            :image="item.main_image_thumb_300"
            :category="item.category.name"
            :present="item.present_name"
            :comment="item.comment_name"
            :price="item.price"
            :allowed="item.allowed"
            :available="item.available"
        />
    </div>
    </template>

<style setup>

.CategoryCard {
    display: grid;
    grid-template-columns: repeat(3, 276px);
    gap: 1rem;
}

@media (max-width: 400px) {
    .CategoryCard {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
