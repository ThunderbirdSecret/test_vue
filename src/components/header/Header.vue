<script lang="js">
    
import Modal from '../modal/Modal.vue';
    export default {
    name: "Header",
    components: { Modal }
}
    
</script>

<template>
    <header class="header__container">
        <div class="header__container__content">
            <div class="header__container__content__btn">
                <Modal />
            </div>
        </div>
    </header>
</template>

<style scoped>
.header__container {
    background: var(--bg-header-color);
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.header__container__content {
    width: 80%;
}

.header__container__content__btn {
    height: 74px;
    display: flex;
    align-items: center;
}

@media (max-width: 320px) {
  .header__container {
    height: 50px;
  }
  
  .header__container__content__btn {
    grid-template-columns: repeat(2, 120px);
    height: 50px;
  }
}

</style>
