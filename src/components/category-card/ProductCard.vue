<script>
export default {
    name: 'ProductCard',
    props: {
        image: {
            type: String
        },
        category: {
            type: String
        },
        present: {
            type: String
        },
        comment: {
            type: String
        },
        price: {
            type: Number
        },
        allowed: {
            type: Boolean
        },
        available: {
            type: Boolean
        }
    }
}
</script>

/**
Ключевые поля продукта для использования:
    main_image_thumb_300 - изображение
    category.name - название категории
    present_name - название продукта
    comment_name - текст под названием продукта
    price - цена (всегда в рублях)
    allowed и available - если хоть одно поле false, тогда товара нет в наличии
    tags - список категорий и подкатегорий, в которые входит продукт
*/
<template>
    <div сlass="сategory" id="сategory" v-if="category||present">
        <img :src="image" class="сategory__img" alt="imd"/>
        <span>{{ category }} </span>
        <h4>{{present}}</h4>
        <p>{{comment}}</p>
        <h4>{{price}} ₽</h4>

        <button v-if="allowed&&available" class="сategory__btn__true">В корзину</button>
        <button v-else class="сategory__btn__false">Нет в наличии</button>

    </div>
    <div v-else>
        <h2>Ой, вас наебали!</h2>
    </div>
</template>

<style scoped>
.сategory__btn__false {
    width: 212px;
    height: 40px;
    border-radius: 22px;
    border: solid 1px var(--stroke-color);
    background: transparent;
    color: var(--stroke-color);
}

.сategory__btn__true {
    width: 212px;
    height: 40px;
    border-radius: 22px;
    border: none;
    background: var(--btn-gradient-color);
    filter: drop-shadow(0 5px 20px rgba(255, 111, 0, 0.3)) drop-shadow(0 1px 5px rgba(255, 111, 0, 0.5));
}

#сategory  {
    justify-content: space-between;
    justify-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    justify-items: center;
    overflow: hidden;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
}
</style>
