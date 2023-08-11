<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { variables } from '../../store/store';

    export default {
        name: "Combobox",
        setup(){
            const store = useStore()
            const city_name = ref()
            const selected_region = ref(null)

            async function searchCity(){
                if(city_name.value){
                    await store.dispatch('city/getCity', {city_name: city_name.value })
                }
            }

            const changingCity = (e) => {
            city_name.value = e.target.value
            searchCity() 
        }

        const clearAfterClick = async(region) => {
            selected_region.value = region.label
            variables.city_id = region.id
        }

            return {
                searchCity,
                city_name,
                changingCity,
                clearAfterClick,
                selected_region,
                regions: computed(() => store.state.city),
                defaultCity: computed(() => store.state.defaultCity)
            }
        }
}
</script>

<template>
    <div class="combobox">
        <input
            name="browsers"
            type="search"
            class="combobox__input" 
            v-model="selected_region" 
            placeholder="Например, Санкт-Петербург"
            @keydown.enter="searchCity(selected_region)"
            @input="changingCity($event)"
             />
        <div class="combobox__select">
            <ul v-if="selected_region" class="combobox__select__list">
               <li 
                   class="combobox__select__list__region"
                   v-for="region in regions.city" 
                   :key="region.id" 
                   @click="clearAfterClick(region)">
                   {{ region.label }}
               </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

.combobox {
    width: 95%;
}
.combobox__select__list {
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 0;
    background-color: white;
    z-index: 2;
}

.combobox__select {
    /* overflow-y: scroll; */
}
.combobox__select__list__region {
    padding: 5px 5px;
}
.combobox__select__list__region:hover {
    background-color: var(--stroke-color);
    width: 100%;
}
  .combobox__input {
    background: transparent;
    border-radius: 5px;
    border: solid 1px var(--stroke-color);
    width: 100%;
    height: 48px;
    margin-right: 5px;
    color: var(--stroke-color);
    font-size: 16px;
    padding-left: 10px;
    outline: none;
}

</style>
