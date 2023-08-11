import dataService from '../../service/DataService'

const state = () => ({
    city: []
})  

const actions = {
    async getCity ({commit}, {city_name}) {
        await dataService.getCityChoice(city_name)
            .then(res => {
                console.log('success')
                const all = res.data.data.filter((item)=> item.label)
                commit('setCity', all)
                return all  
    })
        
    }
}

const mutations = {
    setCity (state, all) {
        state.city = all
    }
}

const getters = {
    city(state) {
        return state.city
    }
}

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
}
