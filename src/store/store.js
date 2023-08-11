import { createStore } from "vuex";
import defaultCity from "./modules/defaultCity"
import city from "./modules/city"
import products from "./modules/products"
import catalog from "./modules/catalog"
import { reactive } from "vue";


export const variables = reactive({
    city_id: 1,
    city_name: 'Новосибирск',
    category_title: ''
})

export const store = createStore({
    modules: {
            defaultCity,
            city,
            products,
            catalog
    }
})
