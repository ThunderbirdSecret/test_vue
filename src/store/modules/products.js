import dataService from '../../service/DataService'


const state = () => ({
    products: [],
  })
  
  const actions = {
    async getProducts({ commit }, { city_id }) {
      try {
        const response = await dataService.getCatalog(city_id)
        if(response.data) {
          console.log('success')
      }
        const filteredTags = response.data.tags.filter(item => item.children.length > 0)
        commit('setProducts', filteredTags)

        return filteredTags
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
  
  const mutations = {
    setProducts(state, filteredTags) {
      state.products = filteredTags
    }
  }
  
  const getters = {
    products(state){
      return state.products
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
