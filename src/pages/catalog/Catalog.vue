<script>
import BackButton from '../../components/back-button/BackButton.vue';
import Sidebar from '../../components/sidebar/Sidebar.vue';
import CategoryCards from '../../components/category-card/CategoryCards.vue';
import { computed } from 'vue';
import { variables } from '../../store/store';
 
    export default {
        name: 'Catalog',
        components: { Sidebar, BackButton, CategoryCards },
        setup() {
            return {
                elCatalog: computed(() => variables.category_title)
            }
        }
    }

</script>

<template>
    <div class="catalog">
        <div сlass="catalog__top" id="top">
            <BackButton />
            <h3 class="catalog__top__title">
               {{ elCatalog }}
            </h3>
        </div>
        <div class="catalog__content">
            <div class="catalog__content__sidebar">
                <Sidebar />
            </div>
            <CategoryCards />
        </div>
    </div>
</template>

<style scoped>
.catalog {
    width: 80%;
    
}

#top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
}
.catalog__top__title {
    margin: 0;
    font-size: 44px;
}
.catalog__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(276px, 0fr));
}

@media (max-width: 320px) {
    .catalog {
        width: 100%;
    }
    .catalog__top__title {
        font-size: 32px;
    }
    .catalog__content {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
    }
}
</style>
