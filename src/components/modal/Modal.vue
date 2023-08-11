<script>
import { useStore } from 'vuex';
import Combobox from '../combobox/Combobox.vue';
import { computed, onBeforeMount, ref } from 'vue';
import { variables } from '../../store/store';

export default {
  name: 'Modal',
  components: {
    Combobox,
  },

  setup() {
    const store = useStore()
    const showModal = ref(false)

    onBeforeMount(async() => {
      if(variables.city_id === 1) {
        await store.dispatch("defaultCity/getDefaultCity", { city_id: variables.city_id} )
      }
    })

    async function getCity() {
      if(variables.city_id !== 1){
        await store.dispatch("defaultCity/getDefaultCity", { city_id: variables.city_id} )
      }

      showModal.value = false
    }

    return {
      showModal,
      getCity,
      title: computed(() => store.state.defaultCity)}
  }
 
};
</script>

<template>
    <div class="modal">
      <img alt="icon" src="../../assets/locate.svg" />
      <button @click="showModal = true" class="modal__btn">{{ title.defaultCity.city }}</button>
      <!-- <button @click="showModal = true" class="modal__btn" v-else>Новосибирск</button> -->
      <div v-if="showModal" class="modal__btn__active">
        <div class="modal__btn__active__content">
            <div class="modal__btn__active__content__close" @click="showModal = false">&times;</div>
            <div class="modal__btn__active__content__top">
                <h2 class="modal__btn__active__content__top__title">Выбор населенного пункта:</h2>
            </div>
            <form @submit.prevent="getCity" autocomplete="off" class="modal__btn__active__content__bottom">
              <Combobox />
                            <button type="submit" class="modal__btn__active__content__success">Подтвердить</button>

            </form>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
.modal__btn__active__content__bottom {
    width: 100%;
    margin-right: 9px;
    width: 100%;
}
  .modal__btn {
    font-size: 20px;
    padding-left: 2px;
    border: none;
    background: transparent;
    color: var(--text-color);
    font-family: 'Futura PT';
  }
  .modal__btn__active {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:rgb(0 0 0 / 75%);
    padding: 10px;
  }
  
  .modal__btn__active__content {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    border-radius: 5px;
    height: 145px;
    align-items: flex-start;
  }

  .modal__btn__active__content__top {
    padding: 0 15px;
  }

  .modal__btn__active__content__top__title {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    padding: 10px 0;
  }
  .modal__btn__active__content__bottom {
    width: 95%;
    display: flex;
    padding: 0 15px;
    align-items: flex-start;
  }



.modal__btn__active__content__input::placeholder {
    padding-left: 10px;
    font-size: 16px;
}

.modal__btn__active__content__success {   
    margin: 4px;
    border: solid 1px var(--stroke-color);
    background: transparent;
    color: var(--stroke-color);
    border-radius: 32px;
    padding: 11px;
    height: 38px;
    padding: 10px;
    transition: 0.3s;
}

.modal__btn__active__content__success:hover {
    background-color: rgba(0, 0, 0, 0.437);
    color: white;
}
  .modal__btn__active__content__close {
    font-size: 28px;
    font-weight: bold;
    color: var(--stroke-color);
    cursor: pointer;
    flex: none;
    margin-left: auto;
    padding-right: 10px;
  }

  @media (max-width: 320px) {
  .modal__btn {
    font-size: 16px;
  }
  
  .modal__btn__active__content {
    height: 200px;
  }
  
  .modal__btn__active__content__top__title {
    font-size: 14px;
  }
  
  .modal__btn__active__content__bottom {
    padding: 0;
  }
  
  .modal__btn__active__content__success {
    padding: 8px;
    height: 32px;
  }
  
  .modal__btn__active__content__close {
    font-size: 24px;
  }
}
  </style>
