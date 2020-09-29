import axios from 'axios'

// Define URL Backend API
const APIUrl = 'https://api.github.com/users'

// Define URL Base + Headers en constante global para peticiones POST
const API = axios.create({
    baseURL: APIUrl,
})

export { API }