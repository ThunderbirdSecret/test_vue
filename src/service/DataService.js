import http from "../api/request"

class DataService {
    // mainPage Вывести список категорий в зависимости от выбранного населённого пункта.
    // GET: https://nlstar.com/ru/api/catalog3/v1/menutags/
    getCatalog(city_id=1) {
        return http.get(`/ru/api/catalog3/v1/menutags/?city_id=${city_id}`)
    }

    //Выбор населенного пункта
    getCityChoice(city_name) {
        return http.get(`api/catalog3/v1/city/?term=${city_name}&country=ru`)
    }

    //Получение данных для города по умолчанию
    getDefaultData(city_id) {
        return http.get(`ru/api/catalog3/v1/city/?id=${city_id}`)
    }
    // Данные страницы категории общий запрос категории

    // список всех продуктов категории массив products 
    getCategory(slug, city_id=1) {
        return http.get(`ru/api/catalog3/v1/menutags/${slug}/?city_id=${city_id}`)
    }
}

export default new DataService()
