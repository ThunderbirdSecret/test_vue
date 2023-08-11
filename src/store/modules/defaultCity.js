import dataService from '../../service/DataService'

const state = () => ({
    defaultCity: []
})  

const actions = {
    async getDefaultCity ({commit}, {city_id}) {
        await dataService.getDefaultData(city_id)
        .then(res => {
            console.log('success')
            const all = res.data.data
            commit('setDefaultCity', all)
            return all  
    })
        
    }
}


const mutations = {
    setDefaultCity (state, all) {
        state.defaultCity = all
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
