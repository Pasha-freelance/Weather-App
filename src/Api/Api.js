import * as axios from 'axios'

const apiKey = '01c20024f3c9c8b39f3070c40bd64db3'
const apiInstance = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/'})

export const getCurrentWeather = {
    byName(cityName) {
        return apiInstance.get(`weather?q=${cityName}&appid=${apiKey}&lang=ru&units=metric`).then(response => response)
    }
}
