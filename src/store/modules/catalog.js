import dataService from '../../service/DataService'

const state = () => ({
    catalog: [],
})  

const actions = {
    async getCatalog ({commit}, {city_id, slug}) {
        try {
            const response = await dataService.getCategory(slug, city_id)
            if(response.data) {
                console.log('success')
            }
            const result = response.data
            commit('setCatalog', result)
            return result

        }  catch(error) {
            console.log(error)
        }
    },
}

const mutations = {
    setCatalog (state, result) {
        state.catalog = result
    },
}

const getters = {
    catalog(state) {
        return state.catalog
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
