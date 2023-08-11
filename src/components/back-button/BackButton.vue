<script>

export default {
    name: 'BackButton',
    methods: {
        navigate() {
            this.$router.replace({ path: `/` })
        }
    }
}
</script>

<template>
    <button class="back__button" type="button" @click="navigate">
       <img class="back__button__img" src="../../assets/icon-arrow.svg" alt="back"/>
    </button>
</template>

<style>
.back__button {
    border-radius: 55px;
    border: none;
    height: 43px;
    width: 30px;
    height: 30px;
    background: var(--text-color);
}

.back__button__img {
    width: 100%;
    height: 100%;
}

</style>
