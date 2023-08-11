<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// import { state } from '../../store'

//  import router from '../../router';

/*GET: https://nlstar.com/ru/api/catalog3/v1/menutags/

Обязательные парметры:
city_id - ID населённого пункта

Ключевые поля для использования:
name - название категории
text_color - цвет текста названия категории
image - изображение для плитки категории
slug - уникальный тэг категории, для запроса данных категории и формирования адреса страниц
*/
      const props = defineProps({
        name: String,
        textColor: String,
        image:String,   
        slug: String, 
        })
        const router = useRouter()

        
          function getName(){

            router.push(`/catalog/${props.slug}`)
            router.replace({ path: `/catalog/${props.slug}` })
        }
</script>

<template>
    <section class="card" @click="getName">
        <img :src="image" alt="card image" class="card__image" />
        <div class="card__text" :style="{color: textColor}">{{ name }}</div>
    </section>

</template>

<style>
.card {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
}

.card__text {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
}

</style>
